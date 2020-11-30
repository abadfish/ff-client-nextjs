import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <AppContainer>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Nav />
          <Main>
            { children }
          </Main>
          <Footer />
        </AppContainer>
    )
}

export default Layout

const AppContainer = styled.div `
  min-height: 100vh;
  // padding: 0 0.5rem;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // align-items: center;
`
const Main = styled.div `
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
