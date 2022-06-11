import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterLeft>
                <h3>Rezervišite Apartman</h3>
                <p>Brzo i lako pronađite idealan apartman za Vaš odmor, proslavu ili team building.</p>
            </FooterLeft>
            <FooterRight>
                <FooterCard>
                    <h3>O nama</h3>
                    <Link href="/">O nama</Link>
                    <Link href="/">Usluge</Link>
                    <Link href="/">Novosti</Link>
                </FooterCard>
                <FooterCard>
                    <h3>Kompanija</h3>
                    <Link href="/">Kako radimo?</Link>
                    <Link href="/">Kapital</Link>
                    <Link href="/">Bezbednost</Link>
                </FooterCard>
                <FooterCard>
                    <h3>Podrška</h3>
                    <Link href="/">FAQ</Link>
                    <Link href="/">Centar</Link>
                    <Link href="/">Kontakt</Link>
                </FooterCard>
                <FooterCard>
                    <h3>Kontakt</h3>
                    <Link href="/">Zašto mi?</Link>
                    <Link href="/">Podržite nas</Link>
                </FooterCard>
            </FooterRight>
        </FooterWrapper>
        <Copyright>
            <CopyrightLeft>
                <p>@2022 Rezervišite Apartman. Sva prava zadržana.</p>
            </CopyrightLeft>
            <CopyrightRight>
                <Link href="/">Uslovi korišćenja</Link>
                <Link href="/">Politika poslovanja</Link>
            </CopyrightRight>
        </Copyright>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const FooterWrapper = styled.div`
    width: 90%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 1000px){
        grid-template-columns: auto;
    }
`

const FooterLeft = styled.div`
    > h3 {
        color: #21af69;
    }

    > p {
        max-width: 300px;
        font-size: 0.9rem;
        color: #888;
    }
`

const FooterRight = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;

    @media screen and (max-width: 550px){
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }

    @media screen and (max-width: 400px){
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
`

const FooterCard = styled.div`
    display: flex;
    flex-direction: column;

    > h3 {
        font-size: 1rem;
        color: #21af69;
    }

    > a {
        font-size: 0.9rem;
        margin-bottom: 10px;
        color: #888;
        transition: .2s all;

        &:hover{
            color: #21af69;
        }
    }
`

const Copyright = styled.div`
    width: 90%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid #ddd;

    @media screen and (max-width: 770px){
        flex-direction: column;
    }
`

const CopyrightLeft = styled.div`
    > p {
        font-size: 0.9rem;
        color: #888;

        @media screen and (max-width: 770px){
            line-height: 1em;
            margin: 5px;
        }

        @media screen and (max-width: 450px){
            text-align: center;
        }
    }
`

const CopyrightRight = styled.div`
    @media screen and (max-width: 450px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    > a {
        font-size: 0.9rem;
        margin: 0 10px;
        color: #888;
        transition: .2s all;  

        &:hover{
            color: #21af69;
        }
    }
`