import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

const Nav = () => {
    return (
        <NavBar >
          <LinkCell><Link href="/"><a>Home</a></Link></LinkCell>
          <LinkCell><Link href="/about"><a>About</a></Link></LinkCell>
          <LogoLink src='https://res.cloudinary.com/abadfish/image/upload/v1607394173/ffix/logo_FF_white_horse_transparent_bg.png' alt='ff-logo' />
          <LinkCell><Link href="/usage"><a>Usage</a></Link></LinkCell>
          <LinkCell><Link href="/buy"><a>Buy</a></Link></LinkCell>
        </NavBar>
    )

}

export default Nav

const NavBar = styled.nav `
  height: 100px;
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(5, 20%);
  padding: 0 2rem;
  background: transparent;
  /* color: #d3d3d3; */
  /* color: #242e62; */
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`
const LinkCell = styled.a `
  /* padding-top: 2rem; */
  line-height: 90px;
  letter-spacing: 3px;
  font-family: 'Sorts Mill Goudy', serif;
`

const LogoLink = styled.img `
  width: 150px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`
// <LogoLink src="https://res.cloudinary.com/abadfish/image/upload/v1606877302/ffix/farriers-fix-logo-horizontal.jpg" alt='oil-bottle'/>
