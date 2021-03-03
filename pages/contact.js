import { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

// Farriers Fix Inc.
// PO Box 191
// Bedford, NY 10506
//
// For More Information you can Call (888) 779-7775,
// or leave us a message below.
const Contact = () => {
  return (
    <Layout>
      <ContactForm>
        <form action="">
          <Input type="text"/>
          <Input type="text"/>
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
