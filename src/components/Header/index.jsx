import { Container } from "./styles";
import { Input } from "../Input";

export function Header() {
    return(
        <Container>
            <h1>MoviesNotes</h1>

            <Input />

            <div>
                <span>Jean Augusto</span>
                <img src="https://github.com/jean88asl.png" alt="imagem do usuário" />
            </div>
        </Container>    
    )
}