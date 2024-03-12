import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Avatar } from "./styles"

export function Perfil() {
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                    Voltar
                </a>
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
                />

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button
                    title="Salvar"
                    type="button"
                />
            </Form>
        </Container>
    )
}