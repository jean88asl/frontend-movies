import { styled } from "styled-components"
import { FaStar } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const Star = styled(FaStar)`
    cursor: pointer;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
`