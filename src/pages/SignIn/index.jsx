import { useState } from "react"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Background } from "./styles"

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return (
        <Container>
            <Form>
                <h1>MovieNotes</h1>
                <p>Aplicação de resenha sobre filmes</p>

                <h2>Faça seu Login</h2>

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Entrar"
                    type="button"
                    onClick={handleSignIn}
                />

                <Link to={"/register"}>
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    )
}