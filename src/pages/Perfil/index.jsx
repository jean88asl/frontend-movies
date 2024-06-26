import { useState } from "react"
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../service/api"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Avatar } from "./styles"

export function Perfil() {
    const { user, updatePerfil } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updatePerfil({ user, avatarFile })
    }

    async function handleChangeAvatar( event ) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src={avatar} 
                    alt="image user" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button
                    title="Salvar"
                    type="button"
                    onClick={handleUpdate}
                />
            </Form>
        </Container>
    )
}