import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const Hero = ({ title, description, buttonURL, buttonText, imageURL }) => {
  return (
    <HeroContainer style={{ backgroundImage: "url(" + imageURL + ")" }}>
      <HeroBackground>
        <HeroContainerWrapper>
          <HeroLeft>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link href={ '' + buttonURL }>{buttonText}</Link>
          </HeroLeft>
        </HeroContainerWrapper>
      </HeroBackground>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/01.jpg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
`

const HeroBackground = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`

const HeroContainerWrapper = styled.div`
      display: grid;
      width: 100%;
      width: 85%;
      max-width: 1200px;
      margin-top: 40px;
`

const HeroLeft = styled.div`
  padding: 30px 0px 110px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

    > h1{
        text-align: center;
        font-size: 4.5rem;
        line-height: 1em;
        margin: 0;
        color: white;
        max-width: 70%;
    }

    > p{
        line-height: 1.5em;
        padding-top: 0px;
        font-size: 1.2rem;
        color: white;
        max-width: 70%;
    }

    > a {
      width: 200px;
      height: 50px;
      background: #21af69;
      color: #fff;
      border: none;
      font-size: 1rem;
      border-radius: 30px;
      font-weight: 600;
      transition: .2s all;
      cursor: pointer;
      text-align: center;
      line-height: 50px;

      &:hover{
        opacity: 0.8;
      }
    }
`

const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroRightImage = styled.img`
    /* height: 100%;
    width: 80%; */
    /* margin-bottom: -70px;
    border-top-left-radius: 48%;
    border-top-right-radius: 48%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-image: url('/apartment03.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 20px solid #212121; // 21af69 */
`