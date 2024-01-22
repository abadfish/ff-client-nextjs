import React, { useState } from 'react'
import styled from 'styled-components'
import { HamburgerThreeDYReverse } from 'react-animated-burgers'
import Link from 'next/link'

const Nav = () => {
  const [isActive, setActive] = useState(false)
  const toggle = () => {
    setActive(prevState => setActive(!prevState))
  }
  const mobile = () => {
    if (window.innerWidth <= 768) {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      <MobileNav>
        <HamburgerThreeDYReverse
          isActive={ isActive }
          toggleButton={ toggle }
          barColor="white"
        />
      </MobileNav>
      { mobile && isActive ?
        <Menu>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/usage">Usage</Link>
          <Link href="/buy">Retailers</Link>
        </Menu>
        :
        null
      }
      <NavBar >
        <LinkCell><Link href="/">Home</Link></LinkCell>
        <LinkCell><Link href="/about">About</Link></LinkCell>
        {/*<LogoLink src='https://res.cloudinary.com/abadfish/image/upload/v1607394173/ffix/farriers-fix-logo-vertical' alt='ff-logo' />*/}
        <LogoLink src='https://res.cloudinary.com/abadfish/image/upload/v1607394173/ffix/logo_FF_white_horse_transparent_bg.png' alt='ff-logo' />
        <LinkCell><Link href="/usage">Usage</Link></LinkCell>
        <LinkCell><Link href="/buy">Retailers</Link></LinkCell>
      </NavBar>
    </>
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
  @media (max-width: 768px) {
    display: none;
  }
`
const MobileNav = styled.nav `
  @media (min-width: 769px) {
    display: none;
  }
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
const Menu = styled.div `
  width: 50vw;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  background: #f7f7f7;
  a {
    padding: 1rem 0;
    font-family: 'Sorts Mill Goudy', serif;
    color: #242e62;
    font-weight: bold;
    font-size: 110%;
  }
`
