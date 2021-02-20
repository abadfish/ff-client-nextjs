import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'

// const fetcher = () => fetch('http://localhost:3001/api/accounts').then((res) => res.json())


const Home = () => {

  const [showCard, setShowCard] = useState(false)


  return (
    <Layout>
      <Page>
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
                <p>Originally developed for use by farriers to treat common hoof problems encountered in many horses, such as soreness, thrush, soft or brittle hoof composition, founder (laminitis), quarter cracks and white line disease, Farriers' Fix was one farrier's formula.  Experiments with various ingredients to form a topical solution led to the development of what is now called Farriers’ Fix Hoof Oil. </p>
                <More>More about Farriers' Fix origins>></More>
              </Card>
            </Link>
          </CardRowLeft>
          <CardRowRight>
            <Link href="/usage">
              <Card>
                <SectionHeading>Countless Benefits.</SectionHeading>
                <br /><br /><CardSpan><strong>FIX SORENESS </strong>
                The unique blend of ingredients in Farriers’ Fix penetrates the hoof capsule to draw out soreness. In many cases, horses that were suffering from stone bruises or trimmed too short, were actually rideable the next day. It’s an ideal treatment for horses that are racing, jumping and working on adverse surfaces.</CardSpan>
                <br /><br /><CardSpan><strong>FIX DRY, CRACKED HOOVES </strong>
                Many hoof oils are petroleum or lacquer based and seal in or seal out moisture. The all natural ingredients in Farriers’ Fix balance the moisture content and allow the hoof to breathe, which is essential for a healthy hoof.</CardSpan>
                <br /><br />
                <More>See more benefits>></More>
              </Card>
            </Link>
          </CardRowRight>
        </Content>
      </Page>
    </Layout>
  )
}

export default Home

export const Page = styled.main `
  text-align: center;
  padding-bottom: 2rem;
`
export const Content = styled.section `
  width: 100%;
  // padding: 2rem 0;

`
export const More = styled.span `
  font-size: 150%;
  font-weight: 600;
  padding-top: .7rem;
  color: #739ac5;
  &:hover {
    cursor: pointer;
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
`
export const SectionHeading = styled.span `
  font-family: 'Sorts Mill Goudy', serif;
  color: #242e62;
  text-align: left;
  font-size: 200%;
  font-weight: 600;
`
const CardSpan = styled.span `
  font-size: 125%;
  margin-top: 1rem;
`
export const CardRowRight = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

`
export const CardRowLeft = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  webkit-box-shadow: 0 0 0 0px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  box-shadow: 0 0 0 0px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);

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
    font-size: 130%;
    text-align: left;
  }
`
// img {
//   width: 200%;
//   margin-left: 50%;
//   transform: translateX(-50%);
// }
