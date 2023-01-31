import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme['green-500']};
  padding: 2.5rem 0 2.5rem;
`

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    cursor: pointer;

    li {
      padding-top: 0.5rem;
      color: ${(props) => props.theme.white};

      &:first-child {
        padding-top: 1rem;
      }

      &:hover {
        color: ${(props) => props.theme['gray-900']};
        transition: background-color 0.2s;
      }
    }
  }

  h4 {
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    letter-spacing: 2px;
  }
`
