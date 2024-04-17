import { useState } from "react"
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Avatar } from "./styles"

export function Perfil() {
    const { user, updatePerfil } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updatePerfil({ user })
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
                    <img src="https://github.com/jean88asl.png" alt="image user" />

                    <label htmlFor="">
                        <FiCamera />
                        <input
                            id="avatar"
                            type="file"
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