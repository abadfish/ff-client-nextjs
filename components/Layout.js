import styled, { createGlobalStyle } from 'styled-components'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'


const Layout = ({ children }) => {
  const router = useRouter()
  console.log(router.pathname)
  const image1 = "https://res.cloudinary.com/abadfish/image/upload/v1606864749/ffix/hot-iron-barstock.jpg"
  const image2 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on.jpg"
  const image3 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/healthy-hoof-on-stand.jpg"

  const bgImage = () => {
    switch (router.pathname) {
      case '/':
        return image3
      case '/about':
        return image2
      default:
        return image1
    }

  }
    return (
        <App>
          <Head>
            <title>Farrier's Fix</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <AppContainer>
            <PageBg layoutImage={bgImage()}>
              <BgOverlay className={styles.gradient}>
                <Nav />
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
const AppContainer = styled.main `
  width: 100%;
  height: 1000px;
  position: relative;
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
  height: 100%;
  width: 100%;
  background-color: rgba(255,255,255,0.6);
`
const Main = styled.div  `
  color: #fff;
  padding: 1rem;
`
// const Main = styled.div `
//   padding: 5rem 0;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `

// padding: 0 0.5rem;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;

// background: rgb(255,255,255);
// background: linear-gradient(90deg, rgba(255,255,255,0.8) 27%, rgba(255,255,255,0.4211647727272727) 66%, rgba(255,255,255,0.5) 100%);
