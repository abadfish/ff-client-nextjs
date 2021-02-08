import { useState } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Page, Content, PageMessage, SectionHeading, CardRowLeft, CardRowRight, More } from './index'

export async function getEndorsementsData() {
  const res = await fetch('http://localhost:3001/api/endorsements')
  const endorsements = await res.json()
  return { endorsements }
}

export async function getStaticProps() {
  const endorsementData = await getEndorsementsData()
  return {
    props: {
      endorsementData
    }
  }
}

const About = ({endorsementData}) => {
  const endorsementsNoQuote = endorsementData.endorsements.filter(e => !e.quote).map((e, i) => (
    <EndorsementNoQuote>
      <img src={`${e.image_url}`} alt={e.name}/>
      <div>
        <span>{e.name}</span>
        <span>{e.endorser_description}</span>
      </div>

    </EndorsementNoQuote>
  ))

    return (
        <Layout>
          <Page>
            <Content>
              <PageMessage>
                <p><i>"Initially, we were attracted to the ingredients in Farriers’ Fix Hoof Oil. With that combination, how could it not be good for the hoof? Since using the oil on a regular basis, we’ve noticed an improvement in the quality of the hoof wall. Now, it’s a staple in our program." <strong>-Anne Kursinski, Five-time USET Show Jumping Olympian</strong></i></p>
                <More>See more like this >></More>
              </PageMessage>
              <CardRowLeft>

                  <AboutCard>
                    <img src="https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/paul.jpg" alt='Paul Heller shoeing'/>
                  </AboutCard>
                  <AboutCard>
                    <SectionHeading>Developed by Farriers, for Farriers.</SectionHeading>
                    <p>"I originally developed this product to sell to other farriers. Like most farriers, I have always encountered the basic problems found in many horses – sore feet, thrush, feet that are either too soft or too hard and brittle, founder (laminitis), quarter cracks and white line disease. I started looking for a topical treatment and experimented with various ingredients; until I came up with what I now call Farriers’ Fix Hoof Oil."</p>
                  </AboutCard>

              </CardRowLeft>
              <CardRowRight>

                  <AboutCard>
                    <SectionHeading>Paul Heller, Farrier</SectionHeading>
                    <p>Paul has worked as a farrier in Westchester County, New York since 1972. He primarily shoes USEF “A” Circuit Hunters and, Jumpers as well as upper-level Dressage and Event horses, but prides himself on staying close to his roots, shoeing trail and hunt horses and those living happily in backyards!</p>
                  </AboutCard>
                  <AboutCard>
                    <img src="https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/paul2.jpg" alt='Paul Heller shoeing'/>
                  </AboutCard>

              </CardRowRight>
              <EndorsementCard>
                { endorsementsNoQuote }
              </EndorsementCard>
            </Content>

          </Page>

        </Layout>
    )
}

export default About

export const AboutCard = styled.div `
  width: 50%;
  min-height: 450px;
  background-color: rgba(255,255,255,1);
  padding: 3rem;
  color: #242e62;
  text-align: left;
  p {
    font-size: 130%;
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
const EndorsementCard = styled.div `
  margin-top: 2rem;
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: space-around;
`
const EndorsementCardWithPicture = styled.div `
  width: 100%;
  min-height: 200px;
  display: inline-grid;
  grid-template-columns: 20% 80%;

`

const EndorsementNoQuote = styled.div `
  width: 25%;
  min-height: 200px;
  div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  img {
    webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  }

`
