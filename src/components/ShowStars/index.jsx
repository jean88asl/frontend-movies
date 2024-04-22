/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import {Container} from "./styles"

export function ShowStars({ rating }){
    return(
        <Container>
            {[...Array(5)].map((star, index) => {
                    const starValue = index + 1;

                    return (
                        <label key={index}>
                           
                            <FaStar
                                color={starValue <= rating ? '#ffc107' : '#e4e5e9'}
                                size={25}
                            />
                        </label>
                    );
                })}
        </Container>
    )
}