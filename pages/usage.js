import { useRef } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Content, PageMessage, SectionHeading, CardRowLeft, CardRowRight, More } from './index'
import { scrollToRef } from './about'

const Benefits = () => {

  const benRef = useRef()

    return (
        <Layout>
          <Content>
            <PageMessage>
              <SectionHeading>For daily use or therapeutic application.</SectionHeading>
              <p>Farriers’ Fix Hoof Oil is a topical treatment that benefits the entire hoof from the coronary band to the sole and frog. Whether your horse has an existing hoof issue or you're in need of a general maintenance dressing that looks and smells great, Farriers' Fix has benefits abound. </p>
              <More onClick={() => scrollToRef(benRef)}>See the list</More>
            </PageMessage>
            <CardRowLeft>
              <UsageCard>
                <SectionHeading>For horses with hoof issues:</SectionHeading>
                <p>Sore Feet, Quarter Cracks, Laminitis, Thrush, etc. Apply Farriers’ Fix Hoof Oil to clean and dry hoof exterior, sole and frog every day.
                Allow 5-10 minutes for hoof to absorb oil before returning to stall.</p>
              </UsageCard>
              <UsageCard>
                <img src="https://res.cloudinary.com/abadfish/image/upload/v1614555452/ffix/canter.jpg" alt="hoof issues"/>
              </UsageCard>
            </CardRowLeft>
            <CardRowRight>
              <UsageCard>
                <img src="https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/packing.jpg" alt="packing a hoof"/>
              </UsageCard>
              <UsageCard>
                <SectionHeading>For use under pads:</SectionHeading>
                <p>Using Farriers’ Fix under the pads helps to prevent thrush and other bacteria from forming. By painting the sole and frog and saturating the packing with Farriers’ Fix, the oil will feed into the hoof rather than wick it away. Leather pads do not break down as fast when saturated with Farriers’ Fix.</p>
              </UsageCard>
            </CardRowRight>

          </Content>
          <UsageSection ref={ benRef }>
            <SectionHeading>Fixes...</SectionHeading>
            <UsageList>
              <h2>SORENESS</h2>
              <span>The unique blend of ingredients in Farriers’ Fix penetrates the hoof capsule to draw out soreness. In many cases, horses that were suffering from stone bruises or trimmed too short, were actually rideable the next day. It’s an ideal treatment for horses that are racing, jumping and working on adverse surfaces.</span>

              <h2>TENDER FEET</h2>
              <span>Farriers’ Fix has been incredibly successful on barefoot horses and ponies whose feet were getting sore. Farrier’s Fix also works well with many poultices and packings to enhance the healing process.</span>

              <h2>DRY, CRACKED HOOVES</h2>
              <span>Many hoof oils are petroleum or lacquer based and seal in or seal out moisture. The all natural ingredients in Farriers’ Fix balance the moisture content and allow the hoof to breathe, which is essential for a healthy hoof.</span>

              <h2>THE NEED FOR HEATED VENICE TURPENTINE</h2>
              <span>Venice Turpentine is a primary ingredient in Farriers’ Fix. Because Farriers’ Fix remains liquid in all climates, there’s no longer any need to heat Venice Turpentine.</span>

              <h2>THRUSH AND BACTERIA</h2>
              <span>When applied regularly, Farriers Fix can help prevent thrush and other bacteria from forming. Or, you can use it to get rid of thrush once its started.</span>

              <h2>FOUNDER (LAMINITIS)</h2>
              <span>Farriers’ fix has been successful in relieving the soreness associated with laminitis and fights the bacteria that gets into the laminae</span>
            </UsageList>
          </UsageSection>
        </Layout>
    )
}

export default Benefits


const UsageCard = styled.div `
  width: 50%;
  min-height: 400px;
  background-color: rgba(255,255,255,1);
  padding: 3rem;
  color: #242e62;
  text-align: left;
  p {
    font-size: 120%;
    text-align: left;
  }
  img {
    position: relative;
    width: 100%;
    height: auto;
    webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1.45rem;
    min-height: 150px;
  }
`

const UsageSection = styled.section `
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  width: 100vw;
  padding: 3rem;
  text-align: left;
  clear: both;
  @media (max-width: 768px) {
    padding: 2rem 1.45rem;
  }
`
const UsageList = styled.div `
  h2 {
    margin-top: 2rem;
    color: #242e62;
    font-family: 'Sorts Mill Goudy', serif;
  }
  span {
    font-size: 130%;
  }
  @media (max-width: 768px) {
    span {
      font-size: 120%;
    }
  }
`
