import { Link } from "react-router-dom";
import { Container, Profile, Logo, Search } from "./styles";

export function Header() {
    return (
        <Container>
            <div>
            <Logo to="/">
                <h1>MoviesNotes</h1>
            </Logo>

            <Search>
                <input
                   placeholder="Pesquise pelo titulo" 
                />
             </Search>

             <Profile to="/perfil">
                <div>
                    <div>
                        <p>Jean Augusto</p>
                        <Link href="/">sair</Link>
                    </div>

                    <Link to="/perfil">
                      <img src="https://github.com/jean88asl.png" alt="imagem do usuário" />
                    </Link>
                </div>
            </Profile>
            </div>
        </Container>
    )
}