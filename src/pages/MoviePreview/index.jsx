import { RiStarLine, RiStarSFill, RiArrowLeftLine, RiTimeLine } from "react-icons/ri"
import { Link } from "react-router-dom"

import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"

import { Container, TitleNote, InfoTime, ShowTags } from "./styles"

export function MoviePreview() {
    return (
        <Container>
            <Header />

            <main>
                <Link to="/">
                    <RiArrowLeftLine />
                    Voltar
                </Link>

                <TitleNote>
                    <h1>Matrix</h1>

                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarLine />
                </TitleNote>

                <InfoTime>
                    <img src="https://github.com/jean88asl.png" alt="avatar do usuário" />
                    <p>Por Jeanderson Augusto <RiTimeLine /> 23/05/22 às 08:00</p>
                </InfoTime>

                <ShowTags>
                    <Tag title="Ação"/>
                    <Tag title="Terror"/>
                    <Tag title="Suspense"/>
                </ShowTags>

                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat possimus at vel tenetur iste modi. Numquam iusto sit quam corrupti odio nihil labore perspiciatis eius eaque voluptatum, cupiditate quia.
                   Voluptatibus necessitatibus assumenda quod quidem adipisci temporibus asperiores numquam excepturi labore ad. Laboriosam quam voluptatem eligendi blanditiis quod quas consequatur accusantium, quasi tenetur voluptate deleniti cupiditate molestias nobis quidem reiciendis!
                   Repudiandae, excepturi quam. Voluptatibus, iure omnis sint assumenda eveniet beatae provident maiores aspernatur dolor minima, quod eaque incidunt esse dolorum quibusdam illo aliquam voluptates soluta ullam voluptatem quo quam quidem.
                   Qui, quam? Ab iure sit impedit doloremque at enim quisquam laudantium, quos ea sapiente. Ad, quaerat provident laboriosam, maxime magnam, non iure aspernatur sint quasi aliquam enim tempore asperiores maiores.
                   Veritatis molestias debitis suscipit obcaecati mollitia sed nostrum accusamus consectetur ipsam quam cumque laborum maiores est, exercitationem accusantium alias sunt provident, dolore, qui consequatur ducimus doloribus quasi. Fuga, quos perspiciatis?
                   Accusantium veritatis facere voluptatibus maxime illo, magnam molestias architecto praesentium dolores eligendi neque doloremque mollitia sapiente blanditiis consectetur quas laborum ab eius quisquam. Ullam at id ipsum vitae eos animi?

                   <br />

                   <br />

                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat possimus at vel tenetur iste modi. Numquam iusto sit quam corrupti odio nihil labore perspiciatis eius eaque voluptatum, cupiditate quia.
                   Voluptatibus necessitatibus assumenda quod quidem adipisci temporibus asperiores numquam excepturi labore ad. Laboriosam quam voluptatem eligendi blanditiis quod quas consequatur accusantium, quasi tenetur voluptate deleniti cupiditate molestias nobis quidem reiciendis!
                   Repudiandae, excepturi quam. Voluptatibus, iure omnis sint assumenda eveniet beatae provident maiores aspernatur dolor minima, quod eaque incidunt esse dolorum quibusdam illo aliquam voluptates soluta ullam voluptatem quo quam quidem.
                   Qui, quam? Ab iure sit impedit doloremque at enim quisquam laudantium, quos ea sapiente. Ad, quaerat provident laboriosam, maxime magnam, non iure aspernatur sint quasi aliquam enim tempore asperiores maiores.
                   Veritatis molestias debitis suscipit obcaecati mollitia sed nostrum accusamus consectetur ipsam quam cumque laborum maiores est, exercitationem accusantium alias sunt provident, dolore, qui consequatur ducimus doloribus quasi. Fuga, quos perspiciatis?
                   Accusantium veritatis facere voluptatibus maxime illo, magnam molestias architecto praesentium dolores eligendi neque doloremque mollitia sapiente blanditiis consectetur quas laborum ab eius quisquam. Ullam at id ipsum vitae eos animi?
                </p>
            
            </main>

        </Container>
    )
}