import Nav from './Nav'
import styled, { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import { useRouter } from "next/router";

const Header = (props) => {

  const router = useRouter()
  const image2 = "https://res.cloudinary.com/abadfish/image/upload/v1606864749/ffix/hot-iron-barstock.jpg"
  const image1 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on.jpg"
  const image3 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/healthy-hoof-on-stand.jpg"
  const nailing = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on-cropped.jpg"

  const headerImage = () => {
    switch (router.pathname) {
      case '/':
        return nailing
      case '/about':
        return image2
      default:
        return image3
    }
  }
  return (
    <HeaderWrapper headerImage={headerImage()}>
      <HeaderOverlay>
      <Nav />
        <HeaderContainer>
          <HeaderLeft>
            {/*<h1 style={{ margin: 0 }}>
              <Link href="/">
                <img src="https://res.cloudinary.com/abadfish/image/upload/v1608771246/ffix/logo_FF_white_horse_transparent_bg.png" alt="Logo"/>
              </Link>
            </h1>*/}
            <h1>Farriers' Fix</h1>
            <h2>Hoof Oil</h2>
            <h3>Fix sore feet and toughen hooves</h3>
          </HeaderLeft>
          <div></div>
        </HeaderContainer>
      </HeaderOverlay>
    </HeaderWrapper>
  )
}

export default Header

// background: url("${bgImage}");

const HeaderWrapper = styled.div`
  // background-image: url("https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on-cropped.jpg");
  background-image: url(${props => props.headerImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  // background-position: center;

  h1 {
    font-size: 600%;
    font-weight: 400;
    font-family: 'Sorts Mill Goudy', serif;
    margin-bottom: 0;
    img {
      height: 175px;
      // padding-left: 2rem;
    }
  }
  h2 {
    font-family: 'Sorts Mill Goudy', serif;
    font-size: 300%;
    font-weight: 400;
  }
  h3 {
    color: #d3d3d3;
    font-family: 'Sorts Mill Goudy', serif;
    font-size: 200%;
    font-weight: 400;

  }
`

const HeaderOverlay = styled.div `
  height: 100%;
  width: 100%;
  background-color: rgba(3,3,3, 0.7);
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  min-height: 600px;
  color: #fff;
  width: 100%;
  display: inline-grid;
  grid-template-columns: 50% 50%;
`
const HeaderLeft = styled.div `
  padding: 3rem;
`
