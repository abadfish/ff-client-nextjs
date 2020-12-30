import styled, { createGlobalStyle } from 'styled-components'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
  const router = useRouter()
  console.log(router.pathname)
  // const image3 = "https://res.cloudinary.com/abadfish/image/upload/v1606864749/ffix/logo_FF_horse_transparent.png"
  const image2 = "https://res.cloudinary.com/abadfish/image/upload/v1606864749/ffix/hot-iron-barstock.jpg"
  const image1 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on.jpg"
  const image3 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/healthy-hoof-on-stand.jpg"
  const nailing = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on-cropped.jpg"

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
            <link href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap" rel="stylesheet" />
          </Head>
          <AppContainer>
          <HeaderComponent>
            <Header />
            </HeaderComponent>
            <PageBg layoutImage={bgImage()}>
            {/*<PageBg >*/}
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
const AppContainer = styled.main `
  width: 100%;
  min-height: 100vh;
  position: relative;
  clear: both;
`
const HeaderComponent = styled.div `
  height: 600px;
  width: 100%;
`

const PageBg = styled.div `
  height: 100%;
  width: 100%;
  background-image: url(${props => props.layoutImage});
  /* background-image: url("https://res.cloudinary.com/abadfish/image/upload/v1607394167/ffix/logo_FF_horse-30-opacity_transparent-bg.png"); */
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
`

const BgOverlay = styled.div `
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  /* background-color: rgba(166, 169, 174, 0.6); */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`
const Main = styled.div  `
  /* color: #fff; */

  /* padding: 1rem; */
`

//  for index 2
// const PageBg = styled.div `
//   height: 100%;
//   width: 100%;
//   /* background-image: url(${props => props.layoutImage}); */
//   /* background-image: url("https://res.cloudinary.com/abadfish/image/upload/v1607394167/ffix/logo_FF_horse-30-opacity_transparent-bg.png");
//   background-size: cover;
//   background-attachment: fixed;
//   background-repeat: no-repeat;
//   background-position: center; */
// `
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
