import styled from 'styled-components'

export const GridContainer = styled.section`
  width: 80%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const GridItems = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-bottom: 2rem;
`

interface GridCardProps {
  variant?: 'green'
}

export const GridCard = styled.div<GridCardProps>`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-weight: bold;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  &:hover {
    background: ${(props) => props.theme['green-700']};
    color: ${(props) => props.theme.white};
    transition: background-color 0.2s, color 0.2s, padding 0.2s;
  }
`
