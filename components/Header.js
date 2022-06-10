import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav.js';

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderWrapper>
            <Logo src="/door-key.png" width={50} height={50} />
            <Nav />
            <Buttons>
                <Link href="#">Kontakt</Link>
            </Buttons>
        </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    width: 90%;
    max-width: 1200px;
`

const Logo = styled(Image)`
`

const Buttons = styled.div`

    > a {
        display: block;
        width: 130px;
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