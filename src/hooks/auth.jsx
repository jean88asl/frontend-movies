/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState, useEffect } from "react"
// import { Navigate } from "react-router-dom"

import { api } from "../service/api"

const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@movienotes:user", JSON.stringify(user))
            localStorage.setItem("@movienotes:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })

            // console.log(user, token)
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    async function signOut() {
        localStorage.removeItem("@movienotes:token")
        localStorage.removeItem("@movienotes:user")

        setData({})
    }

    async function updatePerfil({ user, avatarFile }) {
        try {
            if(avatarFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)

            localStorage.setItem("@movienotes:user", JSON.stringify(user))
            setData({user, token: data.token})
            alert("Perfil foi atualizado")
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil.")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@movienotes:token")
        const user = localStorage.getItem("@movienotes:user")

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, user: data.user, signOut, updatePerfil }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}

