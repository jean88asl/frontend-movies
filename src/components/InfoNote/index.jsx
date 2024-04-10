/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { RiStarLine, RiStarSFill } from "react-icons/ri";

import { Tag } from "../Tag";


export function InfoNote({title, value, id, ...rest}) {
    return (
        <Container {...rest}>
            <h3>{title}</h3>

            <div>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarLine />
            </div>

            <div 
                className="text"
                key={id}
            >
                <p>
                    {value.length > 250 ? value.substring(0, 250) + "..." : value}   
                </p>
            </div>

            <Tag title="Drama" className="tag-home" />
            <Tag title="Ação" className="tag-home" />
        </Container>
    )
}