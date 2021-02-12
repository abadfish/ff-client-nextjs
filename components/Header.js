import Nav from './Nav'
import styled, { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import { useRouter } from "next/router";
import HeaderSubComponent from './HeaderSubComponent'

const Header = (props) => {

  const router = useRouter()
  const image2 = "https://res.cloudinary.com/abadfish/image/upload/v1606864749/ffix/hot-iron-barstock.jpg"
  const image1 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on.jpg"
  const image3 = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/healthy-hoof-on-stand.jpg"
  const nailing = "https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/nailing-shoe-on-landscape.png"
  const walking = "https://res.cloudinary.com/abadfish/image/upload/v1612571156/ffix/horse_walking.jpg"

  const headerContent = () => {
    switch (router.pathname) {
      case '/':
        return {
          image: nailing,
          heading: "Farriers' Fix",
          subHeading: "Hoof Oil",
          tagLine: "Fix sore feet and toughen hooves",
          subComponent: null
        }
      case '/about':
        return {
          image: image2,
          heading: "Farriers' Fix",
          subHeading: "Ingredients & Origins",
          tagLine: "...and who is using Farriers' Fix",
          subComponent: <HeaderSubComponent />
        }
      case '/buy':
        return {
          image: walking,
          heading: "Farriers' Fix",
          subHeading: "Where To Find Us",
          tagLine: null,
          subComponent: null
        }
      default:
        return {
          image: image3,
          heading: "Farriers' Fix",
          subHeading: "Benefits & Usage",
          tagLine: "All natural, for health and healing",
          subComponent: null
        }
    }
  }

  const headerText = () => {

  }
  return (
    <HeaderComponent>
      <HeaderWrapper headerImage={headerContent().image}>
        <HeaderOverlay>
        <Nav />
          <HeaderContainer>
            <HeaderLeft>
              <h1>{headerContent().heading}</h1>
              <h2>{headerContent().subHeading}</h2>
              <h3>{headerContent().tagLine}</h3>
            </HeaderLeft>
            <HeaderRight>
              {headerContent().subComponent}
            </HeaderRight>
          </HeaderContainer>
        </HeaderOverlay>
      </HeaderWrapper>
      </HeaderComponent >

  )
}

export default Header

const HeaderComponent = styled.div `
  width: 100%;
  clear: both;
  position: relative;
  webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  z-index: 100;
`


const HeaderWrapper = styled.div`
  background-image: url(${props => props.headerImage});
  background-size: cover;
  // background-attachment: fixed;
  background-repeat: no-repeat;
  // background-position: center;
  overflow: hidden;


  h1 {
    font-size: 600%;
    font-weight: 400;
    font-family: 'Sorts Mill Goudy', serif;
    margin-bottom: 0;
    img {
      height: 175px;
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
  background-color: rgba(3,3,3, 0.5);
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
  padding: 1rem 3rem;
`
const HeaderRight = styled.div `
  padding: 1rem 3rem;
`
