import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/ParticipantsContext'
import { dateFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'

import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../../components/NewParticipantModal'

import {
  SorterDescription,
  SorterContainer,
  SorterFormTitle,
  SorterTable,
  SorterButton,
} from './styles'
import { SorterForm } from './components/SorterForm'
import { UserPlus } from 'phosphor-react'

export function Sorter() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <SorterContainer>
        <SorterDescription>
          <strong>Sorteio de Nomes</strong>
          <p>
            Informe os participantes clicando no botão{' '}
            <span>Novo(a) Participante</span> para que possamos sortear um nome.
          </p>
        </SorterDescription>

        <SorterFormTitle>
          <SearchForm />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <SorterButton>
                Novo(a) Participante
                <UserPlus size={22} />
              </SorterButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </SorterFormTitle>

        <SorterTable>
          <thead>
            <tr>
              <td>Id</td>
              <td>Nome</td>
              <td>Conta</td>
              <td>Data de Registo</td>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td width="40%">{transaction.name}</td>
                  <td>{transaction.socialAccount}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </SorterTable>

        <SorterForm />
      </SorterContainer>
    </div>
  )
}
