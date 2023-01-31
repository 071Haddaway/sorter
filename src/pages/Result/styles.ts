import styled from 'styled-components'

export const ResultContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: auto;
  padding: 2.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

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

export const SortedPerson = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;

  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['green-300']};
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid ${(props) => props.theme['green-300']};
  border-radius: 48px;
  padding: 1.25rem;

  &:hover {
    cursor: text;
    padding: 1.5rem;
    transition: padding 0.2s;
  }
`

export const ResultButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
`

export const ResultButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

interface ResultButtonProps {
  variant: 'save' | 'return'
}

export const ResultButton = styled.button<ResultButtonProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  height: 50px;
  border: 0;

  background: ${(props) =>
    props.variant === 'save'
      ? props.theme['green-300']
      : props.theme['red-300']};
  color: ${(props) => props.theme.white};
  font-size: 1.25rem;
  padding: 0 1.25rem;

  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    background: ${(props) =>
      props.variant === 'save'
        ? props.theme['green-700']
        : props.theme['red-700']};
    border: ${(props) =>
      props.variant === 'save'
        ? props.theme['green-700']
        : props.theme['red-700']};
    transition: background-color 0.2sborder-color 0.2s;
  }
`
