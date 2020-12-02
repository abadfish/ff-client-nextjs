import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Nav = () => {
    return (
        <NavBar>
          <Link href="/"><a>Home</a></Link>
          <Link href="/event/:slug"><a>Events</a></Link>
          <Link href="/about"><a>About</a></Link>
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
