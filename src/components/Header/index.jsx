import { Container } from "./styles";
import { Input } from "../Input";

export function Header() {
    return(
        <Container>
            <h1>MoviesNotes</h1>

            <Input />

            <div>
                <div>
                    <p>Jean Augusto</p>
                    <a href="/">sair</a>   
                </div>

                <img src="https://github.com/jean88asl.png" alt="imagem do usuário" />
            </div>
        </Container>    
    )
}