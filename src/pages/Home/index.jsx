import { useState, useEffect } from "react"
import { RiAddFill } from "react-icons/ri"
import { Container, Menu, Content, NewNoteMovie } from "./styles"

import { api } from "../../service/api"

import { Header } from "../../components/Header"
import { InfoNote } from "../../components/InfoNote"
import { useAuth } from "../../hooks/auth"

export function Home() {
  const {user} = useAuth()
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/?user_id=${user.id}&title&tags`)
      setNotes(response.data)      
    }
    fetchNotes()
  }, [])

  return (
    <Container>
      <Header />

      <Menu>
        <h2>Filmes assistidos</h2>
        <NewNoteMovie
          to="/create"
          >            
          <RiAddFill />
          Adicionar filme
        </NewNoteMovie>
      </Menu>
      <main>
        <Content>
        {notes &&
          notes.map((note, index) => (
            <InfoNote
            key={index}
            id={note.id}
            title={note.title}
            value={note.description}
            rating={note.rating}
          />
          ))
        }
        {/* 
          <InfoNote
            id={1}
            title="Matrix"
            value="O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. "
          /> */}
        </Content>
      </main>
    </Container>
  )
}