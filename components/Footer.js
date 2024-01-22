import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'


const Footer = () => {
    return (
      <Foot>
        <FooterImage>
          <img src="https://res.cloudinary.com/abadfish/image/upload/v1610466382/ffix/anvil.png" alt="ff-logo"/>
					<FooterRow>
            <span>&copy; { new Date().getFullYear() } Farriers' Fix, Inc.</span>
          </FooterRow>
				</FooterImage>
        <RestOfFooter>
          <FooterLinks>
            <FooterSection>
              <Link href="/">Home</Link>
            </FooterSection>
            <FooterSection>
              <Link href="/about">About</Link>
            </FooterSection>
            <FooterSection>
              <Link href="/usage">Usage</Link>
            </FooterSection>
            <FooterSection>
              <Link href="/buy">Retailers</Link>
            </FooterSection>
          </FooterLinks>
          
        </RestOfFooter>
      </Foot>
    )
}

export default Footer

const Foot = styled.footer `
  width: 100%;
  height: 200px;
  background-color: rgb(230, 231, 232);
  color: #242e62;
  display: flex;
  padding: 1rem 2rem;
  @media (max-width: 768px) {
  }
`
const RestOfFooter = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
`
const FooterRow = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 80%;
`

const FooterImage = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
	align-items: center;
  img {
    height: auto;
    width: 200px;
  }
  @media (max-width: 768px) {
    img {
      width: 55px;
      height: auto;
    }
  }
`
const FooterLinks = styled.div `
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  font-family: 'Sorts Mill Goudy', serif;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`

const FooterSection = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`