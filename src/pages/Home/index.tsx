import { PlusCircle } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HomeContainer, HomeContent, HomeSorterButton } from './styles'

export function Home() {
  return (
    <div>
      <HomeContainer>
        <HomeContent>
          <h1>Faça o seu sorteio aqui!</h1>
          <p>
            Lembre-se: Para sortear no Instagram, é preciso ter uma conta para
            negócios.
          </p>

          <nav>
            <NavLink to="/Sorter" title="Sorter">
              <HomeSorterButton>
                Criar Sorteio
                <PlusCircle size={22} />
              </HomeSorterButton>
            </NavLink>
          </nav>
        </HomeContent>
      </HomeContainer>
    </div>
  )
}
