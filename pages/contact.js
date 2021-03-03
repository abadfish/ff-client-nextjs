import { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';


const Contact = () => {
  return (
    <Layout>
      <ContactForm>
        <form action="">
          <Input type="text"/>
          <Button>Submit</Button>
        </form>
      </ContactForm>
    </Layout>
  )
}

export default Contact

const ContactForm = styled.div `
  padding: 3rem;
`
