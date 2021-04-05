import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'


const Home = () => {

  const [showCard, setShowCard] = useState(false)


  return (
    <Layout>
      <Content>
        <PageMessage>
          <SectionHeading>All Natural Ingredients.</SectionHeading>
          <p>Farriers’ Fix is made with only high quality, natural ingredients that provide vitamins A, D & E – all essential for good quality hooves.  There are no fillers in this hoof oil, each ingredient used serves a specific purpose.
          Competitors can also be assured that Farriers’ Fix Hoof Oil has tested negative under <strong><a href="https://inside.fei.org/fei/cleansport/horses" target="_blank" rel="noopener noreferrer">FEI guidelines</a></strong>.</p>
          <Link href="/about"><More>See the full list >></More></Link>
        </PageMessage>
        <CardRowLeft>
          <Link href="/about">
            <Card>
              <SectionHeading>Developed by Farriers, for Farriers.</SectionHeading>
              <p>The formula was originally developed for use by farriers to treat common hoof problems encountered in many horses, such as soreness, thrush, soft or brittle hoof composition, founder (laminitis), quarter cracks and white line disease.  Experiments with various ingredients to form a topical solution led to the development of what is now called Farriers’ Fix Hoof Oil. </p>
              <More>More about Farriers' Fix origins>></More>
            </Card>
          </Link>
          <ImageCard>
            <img src="https://res.cloudinary.com/abadfish/image/upload/v1606877360/ffix/2010_2119_Barn.jpg" alt="barn scene"/>
          </ImageCard>
        </CardRowLeft>
        <CardRowRight>
          <Link href="/usage">
            <Card>
              <SectionHeading>Countless Benefits.</SectionHeading>
              <CardSpan><strong>FIX SORENESS </strong>
              The unique blend of ingredients in Farriers’ Fix penetrates the hoof capsule to draw out soreness. In many cases, horses that were suffering from stone bruises or trimmed too short, were actually rideable the next day. It’s an ideal treatment for horses that are racing, jumping and working on adverse surfaces.</CardSpan>
              <br /><br /><CardSpan><strong>FIX DRY, CRACKED HOOVES </strong>
              Many hoof oils are petroleum or lacquer based and seal in or seal out moisture. The all natural ingredients in Farriers’ Fix balance the moisture content and allow the hoof to breathe, which is essential for a healthy hoof.</CardSpan>
              <br /><br />
              <More>See more benefits>></More>
            </Card>
          </Link>
        </CardRowRight>
      </Content>
    </Layout>
  )
}

export default Home

export const Content = styled.section `
  width: 100%;
`
export const More = styled.span `
  width: 250px;
  font-size: 150%;
  font-weight: 600;
  padding-top: .7rem;
  /* color: #739ac5; */
  /* background-image: linear-gradient(to left, #242e62, red); */
  background-image: linear-gradient(to left, red, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-image 500ms cubic-bezier(0, 0, 0.53, 0.54);
  -webkit-transition: background-image 500ms cubic-bezier(0, 0, 0.53, 0.54);
  &:hover {
    background-image: linear-gradient(to left, #a50000, #a50000);
    /* background-image: linear-gradient(to left, red, #242e62); */
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 140%;
  }


`
export const PageMessage = styled.div `
  width: 100%;
  min-height: 300px;
  background: #f3f3f3;
  color: #242e62;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  p {
    font-size: 140%;
  }
  a {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 1.45rem;
    p {
      font-size: 120%;
    }
  }
`
export const SectionHeading = styled.header `
  font-family: 'Sorts Mill Goudy', serif;
  color: #242e62;
  text-align: left;
  font-size: 200%;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 170%;
    padding-bottom: 1.25rem;
  }
`
const CardSpan = styled.span `
  font-size: 125%;
  margin-top: 1rem;
`
export const CardRowRight = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const CardRowLeft = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`
export const Card = styled.div `
  width: 50%;
  min-height: 500px;
  background-color: rgba(255,255,255,1);
  padding: 4rem;
  color: #242e62;
  text-align: left;
  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  &:hover {
    cursor: pointer;
    webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  }
  p {
    font-size: 120%;
    text-align: left;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1.45rem;

  }
`
export const ImageCard = styled.div `
  width: 100vw;
  img {
    max-width: 100%;
      max-height: 100%;
      display: block;
  }
  @media (min-width: 769px) {
    display: none;
  }
`
// img {
//   width: 200%;
//   margin-left: 50%;
//   transform: translateX(-50%);
// }
