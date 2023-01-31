import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;

  input {
    flex: 1;
    border-radius: 6px 0 0 6px;
    border: 1px solid ${(props) => props.theme['green-300']};
    border-right: 0;
    background: transparent;
    color: ${(props) => props.theme['gray-900']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border: 0;
    border-radius: 0 6px 6px 0;

    background: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme.white};
    font-size: 1.25rem;
    padding: 0 1.25rem;

    font-weight: bold;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-700']};
      border: 1px solid ${(props) => props.theme['green-700']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
