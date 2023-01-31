import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  padding: 5rem 0;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media only screen and (min-height: 768px) {
    padding: 5rem 0 5rem;
  }

  h1 {
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    font-size: 4.375rem;
  }

  p {
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
  }
`

export const HomeSorterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  height: 50px;
  border: 0;

  background: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme.white};
  font-size: 1.25rem;
  padding: 0 1.25rem;

  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme['green-700']};
    border: 1px solid ${(props) => props.theme['green-700']};
    transition: background-color 0.2sborder-color 0.2s;
  }
`
