import { RiAddFill } from "react-icons/ri"
import { Container, Menu, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { InfoNote } from "../../components/InfoNote"

export function Details() {
  return (
    <Container>
      <Header />    

      <Menu>
        <h2>Meu filmes</h2>  
        <Button 
            title="Adicionar filmes"
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