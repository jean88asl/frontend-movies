import { Container } from "./styles";
import { RiStarLine, RiStarSFill } from "react-icons/ri";

export function InfoNote() {
    return (
        <Container>
            <h3>Matrix</h3>

            <div>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarLine />
            </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro et, ab deserunt nam placeat facere suscipit error aliquid, vel ea. Exercitationem ex molestiae aliquid repellat distinctio asperiores eaque at.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro et, ab deserunt nam placeat facere suscipit error aliquid, vel ea. Exercitationem ex molestiae aliquid repellat distinctio asperiores eaque at.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro et, ab deserunt nam placeat facere suscipit error aliquid, vel ea. Exercitationem ex molestiae aliquid repellat distinctio asperiores eaque at.
            </p>

            <div>
                <a href="/">drama</a>
                <a href="/">drama</a>
            </div>
        </Container>
    )
}