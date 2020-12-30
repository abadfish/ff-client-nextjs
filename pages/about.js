import { useState } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Page, Content } from './index'
import HabitList from '../components/HabitList'
import HabitForm from '../components/HabitForm'

const About = () => {
  const [habits, setHabits ] = useState(['Do the dishes'])
    return (
        <Layout>
          <Page>
            <Content>
              <HabitForm setHabits={ setHabits }/>
              <HabitList habits={ habits }/>
            </Content>
          </Page>

        </Layout>
    )
}

export default About

const AboutPage = styled.div `

`

const AboutCard = styled.div `

`
