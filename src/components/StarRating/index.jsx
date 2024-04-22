import { useState } from 'react';
import { Container, Star } from "./styles"

// eslint-disable-next-line react/prop-types
export function StarRating ( { onRate } ) {
  const [rating, setRating] = useState(0); // Estado para armazenar a avaliação

  const handleStarClick = (starValue) => {
    // Atualiza o estado com a nova avaliação
    setRating(starValue);
    // Chama a função de retorno de chamada para passar o valor da avaliação para o componente pai
    onRate(starValue);
  }

  return (
    <Container>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <Star
            key={index}
            className="star"
            color={starValue <= rating ? '#ffc107' : '#e4e5e9'}
            size={32}
            onClick={() => handleStarClick(starValue)}
          />
        );
      })}
    </Container>
  )
}

