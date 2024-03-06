import { Container } from "./styles";

export function Input(title) {
    return(
        <Container>
            <input 
               title={title}  
               placeholder="Pesquisar pelo titulo" 
            />
        </Container>    
    )
}