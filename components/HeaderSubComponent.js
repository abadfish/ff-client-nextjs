import React from 'react'
import styled from 'styled-components'
import { SectionHeading } from '../pages/index'

const HeaderSubComponent = () => {
    return (
        <SubBg>
          <SectionHeading leftPadding='3rem'>Ingredients</SectionHeading>
          <Content>
            <p><strong>Venice Turpentine</strong> <br />An antiseptic that threats thrush and some of the bacteria that causes white line disease.  It also toughens the hoof, making it more resilient to adverse footing conditions.</p><br />
            <p><strong>Cod Liver Oil</strong> <br />Helps to balance the moisture content and keep the hoof malleable. Cod liver oil is an excellent source of Vitamins A & D.</p><br />
            <p><strong>Wintergreen Oil</strong><br /> A catalyst that helps all the ingredients penetrate the hoof capsule is very effective in drawing out soreness And as an added benefit, it makes Farriers’ Fix smell nice!</p><br />
            <p><strong>Safflower Oil</strong> <br />Works with the Cod Liver Oil to balance the moisture content, and contains Vitamin E.</p>
          </Content>
        </SubBg>
    )
}

export default HeaderSubComponent

const SubBg = styled.div `
  background: rgba(255,255,255,0.8);
  padding: 1rem;
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
const Content = styled.div `
  padding: 2rem 3rem;
  @media (max-width: 768px) {
    padding: 2rem 1.45rem;
  }
`