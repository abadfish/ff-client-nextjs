import { useState, useRef } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import Input from 'muicss/lib/react/input'
import Textarea from 'muicss/lib/react/textarea'
import Button from 'muicss/lib/react/button'
import { SectionHeading } from './index'
const { server } = require('../config')

// export async function sendMessage(contact) {
//   const res = await fetch(`${server}/send_email`, {
//     body: JSON.stringify(contact),
//     headers: {'Content-Type': 'application/json'},
//     method: 'POST'
//   })
//   const result = await res.json()
//   console.log(result)
// }

const Success = () => {
  return (
    <SuccessMsg>
      <img src="https://res.cloudinary.com/abadfish/image/upload/v1606877302/ffix/farriers-fix-logo-horizontal.jpg" alt="ff-logo"/>
      <div>
        <p>Thanks for reaching out!</p>
        <p>We'll get back to you shortly.</p>
      </div>
    </SuccessMsg>
  )
}

const Contact = () => {

  const [msgSuccess, setMsgSuccess] = useState(false)

  async function sendMessage(contact){
    const res = await fetch(`${ server }/send_email`, {
      body: JSON.stringify(contact),
      headers: {'Content-Type': 'application/json'},
      method: 'POST'
    })
    const result = await res.json()
    console.log(result)
    processResult(result)
  }

  const processResult = (result) => {
    if (result.message === 'email sent successfully') {
      setMsgSuccess(true)
    }
  }

  const [ contact, setContact ] = useState({
    name: '',
    email: '',
    message: ''
  })

  const messageRef = useRef()

  const handleOnChange = e => {
    const { name, value } = e.target
    setContact({...contact, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    sendMessage(contact)
    messageRef.current.reset()
  }

  return (
    <Layout>
      { msgSuccess ?
        <Modal onClose={ () => setMsgSuccess(false) }>
          <Success />
          <Button
            onClick={ () => setMsgSuccess(false) }
            size='small'
            variant='raised'>Close</Button>
        </Modal>
        :
        null
      }
      <ContactPage>
        <ContactInfo>
          <h2>Farriers Fix Inc.</h2>
          <h3>PO Box 191</h3>
          <h3>Bedford, NY 10506</h3>
          <h3>(888) 779-7775</h3>
        </ContactInfo>
        <ContactForm>
          <h3>Leave us a message below and someone will get back to you shortly.</h3>
          <form ref={ messageRef } onSubmit={handleSubmit}>
            <Input
              label='Name'
              name='name'
              type="text"
              onChange={handleOnChange}
            />
            <Input
              label='Email'
              name='email'
              type="text"
              onChange={handleOnChange}
            />
            <Textarea
              label='Message'
              name='message'
              onChange={handleOnChange}
            />

            <Button type='submit' variant='raised'>Submit</Button>
          </form>
        </ContactForm>
      </ContactPage>
    </Layout>
  )
}

export default Contact

const ContactForm = styled.section `
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  form {
    margin: 3rem 0;
    div {
      position: static;
      label {
        position: static;
        z-index: -1;
      }
    }
    button {
      position: static;
    }
    Input {
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`

const SuccessMsg = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  img {
    width: 250px;
    height: auto;
    margin: 0 auto 2rem auto;
  }
  p {
    color: #242e62;
    font-size: 130%;
  }
`

const ContactPage = styled.div `
  display: flex;
  h3 {
    font-family: 'Sorts Mill Goudy', serif;
    font-size: 200%;
    font-weight: 400;
    color: #242e62;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const ContactInfo = styled.section `
  width: 40%;
  padding: 5rem 1rem;
  h2 {
    font-family: 'Sorts Mill Goudy', serif;
    font-size: 300%;
    font-weight: 400;
    color: #242e62;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`
