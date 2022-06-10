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
        margin: 0 20px;
        padding: 12px 20px;
        background: #000;
        color: white;
        font-weight: 600;
    }
`