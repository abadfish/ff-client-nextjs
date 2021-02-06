import React from 'react'
import styled from 'styled-components'
import { SectionHeading } from '../pages/index'

const HeaderSubComponent = () => {
    return (
        <SubBg>
            <SectionHeading>Ingredients</SectionHeading>
            <ul>
              <li><strong>Venice Turpentine</strong> <br />An antiseptic that threats thrush and some of the bacteria that causes white line disease.  It also toughens the hoof, making it more resilient to adverse footing conditions.</li><br />
              <li><strong>Cod Liver Oil</strong> <br />Helps to balance the moisture content and keep the hoof malleable. Cod liver oil is an excellent source of Vitamins A & D.</li><br />
              <li><strong>Wintergreen Oil</strong><br /> A catalyst that helps all the ingredients penetrate the hoof capsule is very effective in drawing out soreness And as an added benefit, it makes Farriers’ Fix smell nice!</li><br />
              <li><strong>Safflower Oil</strong> <br />Works with the Cod Liver Oil to balance the moisture content, and contains Vitamin E.</li>
            </ul>
        </SubBg>
    )
}

export default HeaderSubComponent

const SubBg = styled.div `
  background: rgba(255,255,255,1);
  // height: 110%;
  padding: 3rem;
  margin-top: 1rem;
  color: #242e62;
  li {
    font-size: 1.3em;
  }
`
