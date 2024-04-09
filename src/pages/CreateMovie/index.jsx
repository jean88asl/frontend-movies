import { Container, Form } from "./styles"
import { RiArrowLeftLine } from "react-icons/ri"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem"


export function CreateMovie() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <a href="/">
                            <RiArrowLeftLine />
                            voltar
                        </a>

                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input placeholder="Título" />
                        <Input placeholder="sua nota(de 0 a 5)" />
                    </div>

                    <TextArea
                        placeholder={"Observações"}
                    />

                    <Section title="Marcadores">
                      <div className="tags">
                        <NoteItem 
                            value="Ação"
                        />    

                        <NoteItem 
                            isNew
                            placeholder="Novo marcador"
                        />
                      </div>
                    </Section>

                    <div>
                        <Button title="Excluir Filme" />
                        <Button title="Salvar Alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    )
}