import React from 'react'
import { StyledHeader, Logo, Nav } from './styles/Header.styled'
import logo from '../images/logo.svg'
import { SecondaryButton } from './styles/Button.styled'
import Banner from './Banner'

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src={logo} alt='logo' />
        <SecondaryButton>Try it free</SecondaryButton>
      </Nav>
      <Banner />
    </StyledHeader>
  )
}

export default Header