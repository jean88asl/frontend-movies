import { RiStarLine, RiStarSFill, RiArrowLeftLine } from "react-icons/ri"

import { Header } from "../../components/Header"

import { Container, TitleNote } from "./styles"

export function MoviePreview() {
    return (
        <Container>
            <Header />

            <main>
                <a href="">
                    <RiArrowLeftLine />
                    Voltar
                </a>

                <TitleNote>
                    <h1>Matrix</h1>

                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarLine />
                </TitleNote>
            
            </main>

        </Container>
    )
}