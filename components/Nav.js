import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <NavBar>
          <a href="/">Home</a>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </NavBar>
    )
}

export default Nav

const NavBar = styled.nav `
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 .5rem;
  background: transparent;
`
