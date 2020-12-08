import { useState } from 'react'
import styled from 'styled-components'
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Layout from '../components/Layout'
import HabitList from '../components/HabitList'
import HabitForm from '../components/HabitForm'

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

        <h1>Home</h1>
        <h3>{ data.sayHello }</h3>
        <HabitForm setHabits={ setHabits }/>
        <HabitList habits={ habits }/>

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
