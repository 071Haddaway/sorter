import { Alarm, Gift, Trophy } from 'phosphor-react'
import { useSummary } from '../../../../hooks/useSummary'
import { GridContainer, GridItems, GridCard } from './styles'

export function GridTemplate() {
  const summary = useSummary()

  return (
    <GridContainer>
      <GridItems>
        <GridCard>
          <header>
            <span>Data do Sorteio:</span>
            <Alarm size={32} color="#ffffff" />
          </header>

          <strong>25/01/2023</strong>
        </GridCard>

        <GridCard>
          <header>
            <span>Quantidade de Ganhadores:</span>
            <Trophy size={32} color="#ffffff" />
          </header>

          <strong>{summary.income}</strong>
        </GridCard>
      </GridItems>

      <GridCard>
        <header>
          <span>Prêmio:</span>
          <Gift size={32} color="#ffffff" />
        </header>

        <strong>Ford KA</strong>
      </GridCard>
    </GridContainer>
  )
}
