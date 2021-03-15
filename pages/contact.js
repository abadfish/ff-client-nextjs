import { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

const Contact = () => {
  const [ contact, setContact ] = useState({
    name: '',
    email: '',
    message: ''
  })
  return (
    <Layout>
      <ContactPage>
        <ContactInfo>
          <p><strong>Farriers Fix Inc.</strong> </p><br />
          <p>PO Box 191</p>
          <p>Bedford, NY 10506</p>
          <p>(888) 779-7775</p>
        </ContactInfo>
        <ContactForm>
          <form action="">
          <h3>Leave us a message below and someone will get back to you shortly.</h3>
            <Input
              label='Name'
              floatingLabel={true}
              name='name'
              type="text"
            />
            <Input
              label='Email'
              floatingLabel={true}
              name='email'
              type="text"
            />
            <Textarea
              label='Message'
              floatingLabel={true}
              name='message'
            />

            <Button variant='raised'>Submit</Button>
          </form>
        </ContactForm>
      </ContactPage>
    </Layout>
  )
}

export default Contact

const ContactPage = styled.div `
  display: flex;

`
const ContactInfo = styled.section `
  width: 40%;
  padding: 3rem;
  p {
    color: #242e62;
  }
`
const ContactForm = styled.section `
  padding: 3rem;
  display: flex;
  justify-content: center;
  width: 60%;
  h3 {
    color: #242e62;
  }
  form {

  }
`
