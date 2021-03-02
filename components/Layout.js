import styled, { createGlobalStyle } from 'styled-components'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
  const router = useRouter()
  const image2 = "https://res.cloudinary.com/abadfish/image/upload/v1606864749/ffix/hot-iron-barstock.jpg"
  const image1 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on.jpg"
  const image3 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/healthy-hoof-on-stand.jpg"
  const nailing = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on-cropped.jpg"
  const image4 = "https://res.cloudinary.com/abadfish/image/upload/v1606877360/ffix/2010_2119_Barn.jpg"

  const bgImage = () => {
    switch (router.pathname) {
      case '/':
        return image4
      case '/about':
        return null
      case '/buy':
        return null
      default:
        return null
    }
  }

  const displayContactUs = () => {
    switch (router.pathname) {
      case '/contact':
        return "hidden"
      default:
        return "visible"
    }
  }

    return (
      <App>
        <Head>
          <title>Farrier's Fix</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap" rel="stylesheet" />
        </Head>
        <AppContainer>
          <Link href="/contact">
            <ContactUs visibility={ displayContactUs() }>
              <div><span>Contact Us</span></div>
            </ContactUs>
          </Link>
          <Header />
          <PageBg layoutImage={bgImage()}>
            <BgOverlay >
              <Main>
              { children }
              </Main>
              <Footer />
            </BgOverlay>
          </PageBg>
        </AppContainer>
      </App>
    )

}

export default Layout

const App = styled.div `
  min-height: 100vh;
`
const AppContainer = styled.div `
  width: 100%;
  min-height: 100vh;
`
const PageBg = styled.div `
  height: 100%;
  width: 100%;
  background-image: url(${props => props.layoutImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
`

const BgOverlay = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Main = styled.main  `
  text-align: center;
  padding-bottom: 2rem;
`
const ContactUs = styled.div `
  visibility: ${props => props.visibility};
  position: fixed;
  z-index: 100;
  bottom: 15px;
  right: 15px;
  div {
    height: 45px;
    width: 140px;
    background: rgba(36,46,98,0.65);
    text-align: center;
    line-height: 45px;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background: rgba(36,46,98,1);
    }
    span {
      color: #f7f7f7;
      font-family: 'Sorts Mill Goudy', serif;
      font-weight: 600;
    }
  }
`
