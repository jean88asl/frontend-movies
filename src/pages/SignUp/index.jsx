import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Background } from "./styles"

export function SignUp() {
    return (
        <Container>
            <Background />
            
            <Form>
                <h1>MovieNotes</h1>
                <p>Aplicação de resenha sobre filmes</p>

                <h2>Crie sua Conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button
                    title="Entrar"
                    type="button"
                />

                <Link to="/">
                    < FiArrowLeft />
                    Voltar para o login
                </Link>
            </Form>

        </Container>
    )
}