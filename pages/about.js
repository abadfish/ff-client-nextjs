import { useState, useRef } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Content, PageMessage, SectionHeading, CardRowLeft, CardRowRight, More } from './index'
import { server } from '../config'


export async function getEndorsementsData() {
  const res = await fetch(`${ server }/endorsements`)
  console.log(server)
  const endorsements = await res.json()
  return { endorsements }
}

export async function getStaticProps() {
  const endorsementData = await getEndorsementsData()
  return {
    props: {
      endorsementData
    },
    revalidate: 2,
  }
}
export const scrollToRef = (ref) => {
  window.scrollTo({
    behavior: "smooth",
    top: ref.current.offsetTop
    })
}

const About = ({endorsementData}) => {

  const endorsementRef = useRef()

  const endorsementsNoQuote = endorsementData.endorsements.filter(e => !e.quote).map((e, i) => (
    <EndorsementNoQuote key={e.id}>
      <img src={`${e.image_url}`} alt={e.name}/>
      <EndorserInfo alignment="center">
        <strong><span>{e.name}</span></strong>
        <i>{e.endorser_description}</i>
      </EndorserInfo>
    </EndorsementNoQuote>
  ))

  const endorsementsWithQuote = endorsementData.endorsements.filter(e => e.quote && e.image_url).sort((a, b) => a.quote.length - b.quote.length).map((e, i) => (
    <EndorsementWithQuote key={e.id}>
      <ImageContainer>
        <img src={`${e.image_url}`} alt={e.name}/>
      </ImageContainer>
      <EndorserInfo alignment="left">
        <strong><span>{e.name}</span></strong>
        <i>{e.endorser_description}</i>
        <Quote><span>{e.quote}</span></Quote>
      </EndorserInfo>


    </EndorsementWithQuote>
  ))

  const endorsementsNoImage = endorsementData.endorsements.filter(e => e.quote && !e.image_url).sort((a, b) => a.quote.length - b.quote.length).map((e, i) => (
    <EndorsementWithQuote key={e.id}>
      <ImageContainer>
        <img src={"https://res.cloudinary.com/abadfish/image/upload/v1606877302/ffix/farriers-fix-logo-vertical.jpg"} alt="farriers fix logo"/>
      </ImageContainer>
      <EndorserInfo alignment="left">
        <strong><span>{e.name}</span></strong>
        <i>{e.endorser_description}</i>
        <Quote><span>{e.quote}</span></Quote>
      </EndorserInfo>
    </EndorsementWithQuote>
  ))

  // const endorsementsNoImage = endorsementData.endorsements.filter(e => e.quote && !e.image_url).sort((a, b) => a.quote.length - b.quote.length).map((e, i) => (
  //   <EndorsementNoImage key={e.id}>
  //     <EndorserInfo alignment="left">
  //       <strong><span>{e.name}</span></strong>
  //       <i>{e.endorser_description}</i>
  //       <Quote><span>{e.quote}</span></Quote>
  //     </EndorserInfo>
  //
  //
  //   </EndorsementNoImage>
  // ))

    return (
        <Layout>
          <Content>
            <PageMessage>
              <p><i>"Initially, we were attracted to the ingredients in Farriers’ Fix Hoof Oil. With that combination, how could it not be good for the hoof? Since using the oil on a regular basis, we’ve noticed an improvement in the quality of the hoof wall. Now, it’s a staple in our program." <strong>-Anne Kursinski, Five-time USET Show Jumping Olympian</strong></i></p>
              <More onClick={() => scrollToRef(endorsementRef)}>See more like this >></More>
            </PageMessage>
            <CardRowLeft>
              <AboutCard>
                <img src="https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/paul.jpg" alt='Paul Heller shoeing'/>
              </AboutCard>
              <AboutCard>
                <SectionHeading>Developed by Farriers, for Farriers.</SectionHeading>
                <p>"I originally developed this product to sell to other farriers. Like most farriers, I have always encountered the basic problems found in many horses – sore feet, thrush, feet that are either too soft or too hard anlength d brittle, founder (laminitis), quarter cracks and white line disease. I started looking for a topical treatment and experimented with various ingredients; until I came up with what I now call Farriers’ Fix Hoof Oil."</p>
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
            <EndorsementSection ref={ endorsementRef }>
              <div>
                <SectionHeading>Who is using Farriers' Fix...</SectionHeading>
              </div>
              <EndorsementRow spacing="space-around">
                { endorsementsNoQuote }
              </EndorsementRow>
              <div style={{ margin: '30px'}}>
                <SectionHeading>What people are saying about Farriers' Fix...</SectionHeading>
              </div>
                { endorsementsWithQuote }
                { endorsementsNoImage }
            </EndorsementSection>
          </Content>
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
const EndorsementSection = styled.section `
  margin-top: 2rem;
`
const EndorsementRow = styled.div `
  padding: 0 1rem;
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.spacing};
`
const EndorserInfo = styled.div `
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  text-align: ${props => props.alignment};
  span {
    color: #242e62;
    font-size: 120%;
  }
`
const EndorsementNoQuote = styled.div `
  width: 25%;
  min-height: 200px;
  margin: 1rem 0;
  padding: 2rem 1.45rem;
  img {
    margin-bottom: 2rem;
    -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 4px 8px rgba(16,22,26,.2), 0 18px 46px 6px rgba(16,22,26,.2);
    box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 4px 8px rgba(16,22,26,.2), 0 18px 46px 6px rgba(16,22,26,.2);
  }

`
const EndorsementWithQuote = styled.div `
  width: 95%;
  display: inline-grid;
  grid-template-columns: 30% 70%;
  min-height: 200px;
  max-height: 500px;
  overflow: auto;
  padding: 3rem 2.5rem;
  // -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2);
  // box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2);

`
const EndorsementNoImage = styled.div `
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  overflow: auto;
  padding: 3rem 4rem;

`

const Quote = styled.div `
  padding: 0.5rem 0;
`
const ImageContainer = styled.div `
  // display: flex;
  // flex-direction: column;
  // justify-content: space-around;
  img {
    margin-top: auto;
    margin-bottom: auto;
    height: 205px;
    width: auto;
    -webkit-box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 4px 8px rgba(16,22,26,.2), 0 18px 46px 6px rgba(16,22,26,.2);
    box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 4px 8px rgba(16,22,26,.2), 0 18px 46px 6px rgba(16,22,26,.2);
  }

`
