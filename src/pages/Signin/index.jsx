import { FiMail, FiLock } from "react-icons/fi"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Background } from "./styles"

export function Signin() {
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
                    Criar conta
                </a>
            </Form>

            <Background />
        </Container>
    )
}