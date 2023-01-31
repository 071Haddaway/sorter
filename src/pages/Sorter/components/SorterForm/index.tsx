import { ShuffleAngular } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SorterFormContainer, SorterFormContent } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/ParticipantsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SorterForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  // https://github.com/typicode/json-server#generate-random-data
  // Aqui é onde a variavel que defini a busca deve ser passada, ou a string
  async function handleSortUser(data: searchFormInputs) {
    await fetchTransactions('mario')
  }

  return (
    <SorterFormContainer onSubmit={handleSubmit(handleSortUser)}>
      <SorterFormContent>
        <p>Sortear</p>
        <input
          type="number"
          placeholder="1"
          min={1}
          max={20}
          {...register('query')}
          required
        />
        <p>nome(s) da lista acima</p>
      </SorterFormContent>

      <SorterFormContent>
        <button type="submit" disabled={isSubmitting}>
          Realizar Sorteio
          <ShuffleAngular size={24} />
        </button>
      </SorterFormContent>
    </SorterFormContainer>
  )
}
