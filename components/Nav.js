import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavContainer>

    </NavContainer>
  )
}

export default Nav

const NavContainer = styled.div`
    display: flex;
    
    > a {
        margin: 0 10px;
        transition: .3s all;

        &:hover{
            color: #888;
        }
    }
`