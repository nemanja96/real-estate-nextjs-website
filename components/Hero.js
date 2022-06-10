import React from 'react'
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContainerWrapper>
        <h1>Pronađite apartman za Vas</h1>
        <p>Pretražite veliki izbor apartmana za Vaš savršen odmor.</p>
      </HeroContainerWrapper>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/apartment03.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const HeroContainerWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.6);
      padding: 100px 50px 150px 50px;
      width: 100%;

      > h1{
        text-align: center;
        font-size: 4rem;
        line-height: 1em;
        margin: 0;
        color: white;
        max-width: 70%;
    }

    > p{
        text-align: center;
        line-height: 1em;
        padding-top: 20px;
        color: white;
        max-width: 70%;
    }
`