import { Container, Profile, Logo, Search } from "./styles";

export function Header() {
    return (
        <Container>
            <div>
            <Logo>
                <h1>MoviesNotes</h1>
            </Logo>

            <Search>
                <input
                   placeholder="Pesquise pelo titulo" 
                />
             </Search>

             <Profile>
                <div>
                    <div>
                        <p>Jean Augusto</p>
                        <a href="/">sair</a>
                    </div>

                    <img src="https://github.com/jean88asl.png" alt="imagem do usuário" />
                </div>
            </Profile>
            </div>
        </Container>
    )
}