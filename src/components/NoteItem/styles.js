import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_HEAD};
  color: ${({ theme })=> theme.COLORS.GRAY_300};

  border:  ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;
  padding-right:16px;
  width: auto;
  
  > button {
    border: none;
    background: none;
  }
  
  > input {
    border: none;
    background: transparent;
    width: max-content;
    padding: 16px;

    color: ${({ theme })=> theme.COLORS.GRAY_300};

    &::placeholder {
      color: ${({ theme })=> theme.COLORS.GRAY_300}
    }
  }

  svg {
    color: ${({theme }) => theme.COLORS.PINK}
  }
`