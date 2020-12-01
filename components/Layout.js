import styled, { createGlobalStyle } from 'styled-components'
import { useRouter } from "next/router";

import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'


const Layout = ({ children }) => {
  const router = useRouter()
  console.log(router.pathname)
  const image1 = "https://res.cloudinary.com/abadfish/image/upload/v1606864749/ffix/hot-iron-barstock.jpg"
  const image2 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on.jpg"

  const bgImage = () => {
    switch (router.pathname) {
      case '/':
        return image1
      case '/about':
        return image2
      default:
        return image1
    }

  }
    return (
        <App>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <AppContainer>
            <PageBg layoutImage={bgImage()}>
              <BgOverlay>
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
const AppContainer = styled.div `
  width: 100%;
  height: 800px;
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
  background-color: rgba(255,255,255,0.5);
`
const Main = styled.div  `

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
