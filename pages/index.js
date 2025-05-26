import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'


const Home = () => {

  return (
    <Layout>
      <Content>
        <PageMessage>
          <SectionHeading 
            bgColor='red' 
            fontColor='white'
            leftPadding='3rem'
          >All Natural Ingredients</SectionHeading>
          <FullWidthCard>
            <p>Farriers’ Fix is made with only high quality, natural ingredients that provide vitamins A, D & E – all essential for good quality hooves.  There are no fillers in this hoof oil, each ingredient used serves a specific purpose.
            Competitors can also be assured that Farriers’ Fix Hoof Oil has tested negative under <strong><a href="https://inside.fei.org/fei/cleansport/horses" target="_blank" rel="noopener noreferrer">FEI guidelines</a></strong>.</p>
            <Link href="/about"><More>See the full list </More></Link>
          </FullWidthCard>
        </PageMessage>
        <CardRowLeft>
          <Link href="/about">
            <Card>
              <SectionHeading
                leftPadding='3rem'
                topPadding='3rem'
              >Developed by Farriers, for Farriers</SectionHeading>
              <SectionContent>
                <p>The formula was originally developed for use by farriers to treat common hoof problems encountered in many horses, such as soreness, thrush, soft or brittle hoof composition, founder (laminitis), quarter cracks and white line disease.  Experiments with various ingredients to form a topical solution led to the development of what is now called Farriers’ Fix Hoof Oil. </p>
                <More>More about Farriers' Fix origins</More>
              </SectionContent>
            </Card>
          </Link>
          <ImageCard>
            <img src="https://res.cloudinary.com/abadfish/image/upload/v1748127757/can_jug_grooming_fxiy6b.jpg" alt="barn scene"/>
          </ImageCard>
        </CardRowLeft>
        <CardRowRight>
          <Link href="/usage">
            <Card>
              <SectionHeading 
                bgColor='#242e62' 
                fontColor='white'
                leftPadding='3rem'
              >Countless Benefits</SectionHeading>
              <SectionContent>
                <CardSpan><strong>FIX SORENESS </strong>
                The unique blend of ingredients in Farriers’ Fix penetrates the hoof capsule to draw out soreness. In many cases, horses that were suffering from stone bruises or trimmed too short, were actually rideable the next day. </CardSpan>
                <CardSpan><strong>FIX DRY, CRACKED HOOVES </strong>
                Many hoof oils are petroleum or lacquer based and seal in or seal out moisture. The all natural ingredients in Farriers’ Fix balance the moisture content and allow the hoof to breathe, which is essential for a healthy hoof.</CardSpan>
                <br />
                <More>See more benefits</More>
              </SectionContent>
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
  font-size: 150%;
  font-weight: 600;
  /* color: #739ac5; */
  background-image: linear-gradient(to left, red, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-image 500ms cubic-bezier(0, 0, 0.53, 0.54);
  -webkit-transition: background-image 500ms cubic-bezier(0, 0, 0.53, 0.54);
  &:hover {
    background-image: linear-gradient(to left, #a50000, #a50000);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 140%;
  }


`
export const PageMessage = styled.div `
  width: 100%;
  min-height: 200px;
  background: #f3f3f3;
  color: #242e62;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  a {
    &:hover {
      cursor: pointer;
      text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 120%;
    }
  }
`
export const SectionHeading = styled.header `
  font-family: 'Sorts Mill Goudy', serif;
  color: ${props => props.fontColor ?? '#242e62'};
  background: ${props => props.bgColor ?? 'transparent'};
  text-align: left;
  font-size: 300%;
  font-weight: 600;
  padding-left: ${props => props.leftPadding ?? 0};
  padding-top: ${props => props.topPadding ?? '0.5rem'};
  @media (max-width: 768px) {
    font-size: 240%;
    padding-left: 1.45rem;
    font-weight: 600;
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
	a {
    &:hover {
      cursor: pointer;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const CardRowLeft = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
	a {
    &:hover {
      cursor: pointer;
      text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }

`
export const FullWidthCard = styled.div `
  width: 100%;
  background-color: #f3f3f3;
  padding: 3rem;
  color: #242e62;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
	text-decoration: none;
  p {
    font-size: 140%;
    text-align: left;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1.45rem;

  }
`
export const Card = styled.div `
  width: 50%;
  clear: both;
  min-height: 300px;
  background-color: rgba(255,255,255,1);
  color: #242e62;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
	text-decoration: none;
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
  }
`
export const SectionContent = styled.div `
  padding: 3rem;
  color: #242e62;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
	text-decoration: none;
  p {
    font-size: 140%;
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
