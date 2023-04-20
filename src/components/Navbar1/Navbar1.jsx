import React from 'react'
import { Navbar, NavbarBrand, Container } from 'reactstrap'
import CartWidget from '../CartWidget/CartWidget'

const Navbar1 = () => {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">
          Be Transport
        </NavbarBrand>
          <CartWidget />
      </Container>
    </Navbar>
  )
}

export default Navbar1;