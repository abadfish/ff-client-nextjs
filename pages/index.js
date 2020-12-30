import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Layout from '../components/Layout'

const HELLO_QUERY =  gql `
  query HelloQuery {
    sayHello
  }
`
// const HELLO_QUERY =  gql `
//   query HelloQuery {
//     reddit {
//       subreddit(name: "bboy") {
//         subscribers
//       }
//     }
//   }
// `


const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)
  const [ habits, setHabits ] = useState(['Do the dishes'])
  const [showCard, setShowCard] = useState(false)

  if (loading) return <div />
  console.log(data)

  return (
    <Layout>
      <Page>
        {/*<h3>{ data.sayHello }</h3>*/}
        <Content>
        { showCard ?
          <LargeCard onClick={() => setShowCard(!showCard)}>
            <h1>Ingredient List</h1>
          </LargeCard>
          :
          null
        }
          <HomeCards>

            <Card onClick={() => setShowCard(!showCard)}>
              <h3>All Natural Ingredients</h3>
              <p>Farriers’ Fix is made with only high quality, natural ingredients that provide vitamins A, D & E – all essential for good quality hooves.  There are no fillers in this hoof oil, each ingredient used serves a specific purpose.Competitors can also be assured that Farriers’ Fix Hoof Oil has tested negative under <strong>FEI guidelines</strong>.</p>
            </Card>


            <Card></Card>
          </HomeCards>
          <HomeCards>
            <Card>Venice Turpentine:  an antiseptic that threats thrush and some of the bacteria that causes white line disease.  It also toughens the hoof, making it more resilient to adverse footing conditions.

Cod Liver Oil: Helps to balance the moisture content and keep the hoof malleable. Cod liver oil is an excellent source of Vitamins A & D.

Wintergreen Oil: a catalyst that helps all the ingredients penetrate the hoof capsule is very effective in drawing out soreness. And as an added benefit, it makes Farriers’ Fix smell nice!

Safflower Oil: Works with the Cod Liver Oil to balance the moisture content, and contains Vitamin E.</Card>
            <Card></Card>
          </HomeCards>
        </Content>
      </Page>



    </Layout>
  )
}

export default withApollo(Home)

export const Page = styled.div `
  text-align: center;
  padding-bottom: 2rem;
`
export const Content = styled.div `
  width: 100%;
  padding: 2rem 0;

`
const HomeCards = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem 0;
`
const LargeCard = styled.div `
  width: 80vw;
  height: 500px;
  position: relative;
`
const Card = styled.div `
  width: 40vw;
  height: 400px;
  border: .5px solid #d3d3d3;
  border-radius: 5px;
  background-color: rgba(255,255,255,1);
  padding: 1rem 2rem;
  color: #242e62;
  text-align: left;
  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  &:hover {
    cursor: pointer;
    webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  }
  h3 {
    font-family: 'Sorts Mill Goudy', serif;
    font-size: 200%;
  }
  ul {
    margin-left: 0.5rem;
  }
  p {
    font-size: 150%;
    // font-weight: bold;
    text-align: left;
  }
  img {
    width: 200%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`
const Headline = styled.h1 `
  font-size: 500%;
  font-weight: 400;
  color: #242e62;
`

const Subhead = styled.h3  `
  font-size: 300%;
  font-weight: 400;
  color: #282a2e;
  text-transform: uppercase;
`
