import { ArrowCircleLeft, FloppyDisk, Medal } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { GridTemplate } from './components/GridTemplate'
import {
  ResultButton,
  ResultButtonContainer,
  ResultButtonGroup,
  ResultContainer,
  SortedPerson,
} from './styles'

export function Result() {
  return (
    <ResultContainer>
      <h1>O Nome Sorteado Foi:</h1>
      <SortedPerson>
        Mariana
        <Medal size={32} />
      </SortedPerson>

      <p>Informações do sorteio:</p>
      <GridTemplate />

      <ResultButtonContainer>
        <p>E agora, o que gostaria de fazer?</p>

        <ResultButtonGroup>
          <nav>
            <NavLink to="/Sorter" title="Sorter">
              <ResultButton variant="return">
                Voltar para o Sorteador
                <ArrowCircleLeft size={22} />
              </ResultButton>
            </NavLink>
          </nav>

          <ResultButton variant="save">
            Salvar este resultado
            <FloppyDisk size={22} />
          </ResultButton>
        </ResultButtonGroup>
      </ResultButtonContainer>
    </ResultContainer>
  )
}
