import styled from 'styled-components'

export const SorterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  padding: 4rem 0;
`

export const SorterFormContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) => props.theme['green-300']};
    letter-spacing: 1px;
  }

  input {
    width: 70px;
    border: 2px solid ${(props) => props.theme['gray-300']};
    background: transparent;
    border-radius: 6px;
    padding: 1rem;

    color: ${(props) => props.theme['green-500']};
    cursor: pointer;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    height: 50px;
    border: 0;

    background: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme.white};
    font-size: 1.25rem;
    padding: 0 1.25rem;

    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-700']};
      border: 1px solid ${(props) => props.theme['green-700']};
      transition: background-color 0.2sborder-color 0.2s;
    }
  }
`
