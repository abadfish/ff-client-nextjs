import { useState } from 'react'
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
      <HomePage>

        <Headline>Farrier's Fix Hoof Oil</Headline>
        {/*<h3>{ data.sayHello }</h3>*/}
        <Subhead>Fix Sore Feet & Toughen Hooves</Subhead>

      </HomePage>



    </Layout>
  )
}

export default withApollo(Home)

const HomePage = styled.div `
  text-align: center;
`
const HomeImage = styled.div `
  width: 200px;
  height: auto;
  img {
    width: 100%;
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
