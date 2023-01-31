import { HeaderContainer, HeaderContent } from './styles'

import logoImg from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <nav>
          <NavLink to="/" title="Timer">
            <img src={logoImg} alt="" />
          </NavLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
