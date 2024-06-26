import { useState } from "react"
// import { toast} from "sonner"

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../service/api"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container, Form, Background } from "./styles"

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name || !email || !password){
            return alert("Somente usuários autenticados podem mudar o avatar!")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        }).catch(error => {
            if(error.response){
                // pegando a mensagem do backend
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar o usuário!")
            }
        }) 
    }

    return (
        <Container>
            <Background />
            <Form>
                <h1>MovieNotes</h1>
                <p>Aplicação de resenha sobre filmes</p>

                <h2>Crie sua Conta</h2>

                <Input
                    placeholder="UserName"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

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
                    title="Cadastrar"
                    type="button"
                    onClick={handleSignUp}
                />

                <Link to="/">
                    < FiArrowLeft />
                    Voltar para o login
                </Link>
            </Form>

            

        </Container>
    )
}