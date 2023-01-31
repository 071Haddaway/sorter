import { FooterContainer, FooterContent } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h4>Sorteador</h4>
          <ul>
            <li>Sobre o Sorteador</li>
            <li>Política de Privacidade</li>
            <li>Fale com a gente</li>
            <li>Anuncie no Sorteador</li>
          </ul>
        </div>

        <div>
          <h4>Serviços</h4>
          <ul>
            <li>Sorteio de Nomes</li>
            <li>Sorteio no Instagram</li>
            <li>Sorteio no Facebook</li>
            <li>Sorteio por Arquivo</li>
          </ul>
        </div>

        <div>
          <h4>Sorteador na internet</h4>
          <ul>
            <li>Facebook (Página)</li>
            <li>Facebook (Grupo)</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </FooterContent>
    </FooterContainer>
  )
}
