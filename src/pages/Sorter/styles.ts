import styled from 'styled-components'

export const SorterContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const SorterDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    font-size: 4.375rem;
  }

  p {
    font-size: 1.25rem;
    padding: 2rem;

    span {
      color: ${(props) => props.theme['green-300']};
      font-weight: bold;
    }
  }
`

export const SorterFormTitle = styled.div`
  margin: 4rem auto 0;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SorterTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  thead {
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
  }
  tbody {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['green-500']};
    font-weight: bold;
  }
`

export const SorterButton = styled.button`
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

  :hover {
    background: ${(props) => props.theme['green-700']};
    border: 1px solid ${(props) => props.theme['green-700']};
    transition: background-color 0.2sborder-color 0.2s;
  }
`
