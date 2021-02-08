import Layout from '../components/Layout'
import styled from 'styled-components'
import { Page, Content, PageMessage, SectionHeading, CardRowLeft, CardRowRight } from './index'

const Benefits = () => {
    return (
        <Layout>
          <Page>
            <Content>
              <PageMessage>
                <SectionHeading>For daily use or therapeutic application.</SectionHeading>
                <p>Farriers’ Fix Hoof Oil is a topical treatment that benefits the entire hoof from the coronary band to the sole and frog. Whether your horse has an existing hoof issue or you're in need of a general maintenance dressing that looks and smells great, Farriers' Fix has benefits abound. </p>
              </PageMessage>
              <CardRowLeft>
                <UsageCard>
                  <SectionHeading>For horses with hoof issues:</SectionHeading>
                  <p>Sore Feet, Quarter Cracks, Laminitis, Thrush, etc. Apply Farriers’ Fix Hoof Oil to clean and dry hoof exterior, sole and frog every day.
                  Allow 5-10 minutes for hoof to absorb oil before returning to stall.</p>
                </UsageCard>
                <UsageCard>
                  <img src="https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/packing.jpg" alt="packing a hoof"/>
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
          </Page>
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
`
