import { RiAddFill } from "react-icons/ri"
import { Container, Menu, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { InfoNote } from "../../components/InfoNote"

export function Home() {
  return (
    <Container>
      <Header />

      <Menu>
        <h2>Filmes assistidos</h2>
        <Button
          title="Adicionar filme"
          icon={RiAddFill}
          to="/create"
        >
        </Button>
      </Menu>

      <main>
        <Content>
          <InfoNote
            id={1}
            title="Matrix"
            value="O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. "
          />

          <InfoNote
            id={2}
            title="À Procura da Felicidade"
            value="Chris enfrenta sérios problemas financeiros e sua esposa, Linda, decide partir. Agora solteiro, ele precisa cuidar de Christopher, seu filho de cinco anos. Chris tenta usar sua habilidade como vendedor para conseguir um emprego melhor, mas só consegue um estágio não-remunerado."
          />

          <InfoNote
            id={3}
            title="À Procura da Felicidade"
            value="Chris enfrenta sérios problemas financeiros e sua esposa, Linda, decide partir. Agora solteiro, ele precisa cuidar de Christopher, seu filho de cinco anos. Chris tenta usar sua habilidade como vendedor para conseguir um emprego melhor, mas só consegue um estágio não-remunerado."
          />

          <InfoNote
            id={4}
            title="À Procura da Felicidade"
            value="Chris enfrenta sérios problemas financeiros e sua esposa, Linda, decide partir. Agora solteiro, ele precisa cuidar de Christopher, seu filho de cinco anos. Chris tenta usar sua habilidade como vendedor para conseguir um emprego melhor, mas só consegue um estágio não-remunerado."
          />
        </Content>
      </main>
    </Container>
  )
}