import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Background } from "./styles"

export function Signup() {
    return (
        <Container>
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

                <a href="#">
                    < FiArrowLeft />
                    Voltar para o login
                </a>
            </Form>

            <Background />
        </Container>
    )
}