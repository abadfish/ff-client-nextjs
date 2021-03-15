import React from 'react'
import styled from 'styled-components'
import { SectionHeading } from '../pages/index'

const ContactInfo = () => {
    return (
        <SubBg>
            <div style={{marginTop: '20px'}}>
              <p><strong>Farriers Fix Inc.</strong> </p><br />
              <p>PO Box 191</p>
              <p>Bedford, NY 10506</p>
              <p>(888) 779-7775</p>
            </div>
        </SubBg>
    )
}

export default ContactInfo

const SubBg = styled.div `
  background: rgba(255,255,255,1);
  padding: 3rem;
  margin-top: 1rem;
  color: #242e62;
  p {
    font-size: 130%;
    margin: 0;
  }
  @media (max-width: 768px) {
    padding: 2rem 1.45rem;
    p {
      font-size: 120%;
    }

  }
`
