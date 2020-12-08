import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

const Nav = () => {
    return (
        <NavBar >
          <Link href="/"><a>Home</a></Link>
          <Link href="/event/:slug"><a>Events</a></Link>
          <Link href="/about"><a>About</a></Link>
        </NavBar>
    )

}

export default Nav

const NavBar = styled.nav `
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 .5rem;
  background: transparent;
  color: #d3d3d3;
`

const LogoLink = styled.img `
  width: 150px;
  height: auto;
`
// <LogoLink src="https://res.cloudinary.com/abadfish/image/upload/v1606877302/ffix/farriers-fix-logo-horizontal.jpg" alt='oil-bottle'/>
