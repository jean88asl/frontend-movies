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
            >
        </Button>           
      </Menu>

      <Content>
          <InfoNote />
          <InfoNote />
          <InfoNote />
          <InfoNote />
      </Content>
    </Container>       
  )
}