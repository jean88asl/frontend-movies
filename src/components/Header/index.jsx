import { Link } from "react-router-dom";

import { api } from "../../service/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useAuth } from "../../hooks/auth";

import { Container, Profile, Logo, Search } from "./styles";

export function Header() {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

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
                        <Link 
                            href="/"
                            onClick={signOut}
                        >
                            sair
                        </Link>
                    </div>

                    <Link to="/perfil">
                      <img 
                        src={avatarUrl} 
                        alt="imagem do usuário" />
                    </Link>
                </div>
            </Profile>
            </div>
        </Container>
    )
}