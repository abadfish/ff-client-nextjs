import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
      <Foot>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by </span>
          <h3>Master Xeon</h3>
        </a>
      </Foot>
    )
}

export default Footer

const Foot = styled.footer `
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
    height: 1em;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`
// border-top: 1px solid #eaeaea;
