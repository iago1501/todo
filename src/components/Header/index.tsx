import { HeaderContainer } from "./styles";
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (  
    <HeaderContainer>
      <img src={Logo} alt="logo to-do list" />
    </HeaderContainer>
  )
}
