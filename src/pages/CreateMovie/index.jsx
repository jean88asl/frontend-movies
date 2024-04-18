import { useState } from "react"
import { Container, Form } from "./styles"
import { RiArrowLeftLine } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"
import { api } from "../../service/api"


export function CreateMovie() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")

    const navigate = useNavigate()

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        // state clean
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        // return console.log(title, description, rating, tags)
        const ratingNumber = parseInt(rating)

        if(ratingNumber < 0 || ratingNumber > 5) {
            return alert("A nota deve estar entre 0 e 5")
        }

        if(!title || !description || !tags){
            return alert("Nenhum campo pode ficar em branco")
        }

        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        })
        
        alert("Avaliação criada com sucesso!")
        navigate("/")
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/">
                            <RiArrowLeftLine />
                            voltar
                        </Link>

                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)} 
                        />
                        <Input 
                            placeholder="sua nota(de 0 a 5)" 
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <TextArea
                        placeholder={"Observações"}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            {/* <NoteItem
                                value="Ação"
                            /> */}

                            <NoteItem
                                isNew
                                placeholder="Novo marcador"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div>
                        <Button title="Excluir Filme" className="delete" />
                        <Button 
                            type="button"
                            title="Salvar Alterações" 
                            onClick={handleNewNote}    
                        />
                    </div>
                </Form>
            </main>
        </Container>
    )
}