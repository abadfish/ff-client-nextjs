import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <NavBar >
      <LinkCell><Link href="/">Home</Link></LinkCell>
      <LinkCell><Link href="/about">About</Link></LinkCell>
      {/*<LogoLink src='https://res.cloudinary.com/abadfish/image/upload/v1607394173/ffix/farriers-fix-logo-vertical' alt='ff-logo' />*/}
      <LogoLink src='https://res.cloudinary.com/abadfish/image/upload/v1607394173/ffix/logo_FF_white_horse_transparent_bg.png' alt='ff-logo' />
      <LinkCell><Link href="/usage">Usage</Link></LinkCell>
      <LinkCell><Link href="/buy">Where to Buy</Link></LinkCell>
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
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`
const LinkCell = styled.div `
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
// border-bottom: 2px solid #242e62;
