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

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)
  const [ habits, setHabits ] = useState(['Do the dishes'])

  if (loading) return <div />
  console.log(data)

  return (
    <Layout>
      <Page>
        {/*<h3>{ data.sayHello }</h3>*/}
        <Content>
          <HomeCards>
            <Link href="/usage">
              <Card>
                <CardImageDivL>
                  <img src="https://res.cloudinary.com/abadfish/image/upload/v1606864735/ffix/healthy-hoof-on-stand.jpg"/>
                </CardImageDivL>
                <div>
                  <h1>FIX</h1>
                  <ul>
                  <p>Soreness</p>
                  <p>Dry, cracked hooves</p>
                  <p>Thrush & bacteria</p>
                  <p><a>More >></a></p>
                  </ul>
                </div>
              </Card>
            </Link>
            <Link href="/about">
              <Card>
              <h1>Developed for Farriers, <br />by Farriers</h1>
              <CardImageDivR>
                <img src='https://res.cloudinary.com/abadfish/image/upload/v1606864749/ffix/hot-iron-barstock.jpg'/>
              </CardImageDivR>
            </Card>
            </Link>

          </HomeCards>
          <HomeCards>
            <Card></Card>
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
const CardImageDivR = styled.div `
  overflow: hidden;
  border-radius: 0 5px 5px 0;
`
const CardImageDivL = styled.div `
  overflow: hidden;
  border-radius: 5px 0 0 5px;
`
const Card = styled.div `
  display: grid;
  grid-template-columns: 50% 50%;
  width: 45vw;
  height: 350px;
  // border: 1px solid #d3d3d3;
  border-radius: 5px;
  background-color: rgba(255,255,255,1);
  padding: 0;
  color: #242e62;
  webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);

  transition: transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  &:hover {
    cursor: pointer;
    webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  }
  h1 {
    color: #242e62;
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
