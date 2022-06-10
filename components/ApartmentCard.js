import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import Avatar from '@mui/material/Avatar';

const ApartmentCard = ({ title, numberOfRooms, price, slug, numberOfToalets, apartmentImage, numberOfParkingPlace, propertySize, owner }) => {
  return (
      <Link href={`/apartment/${slug}`}>
        <ApartmentContainer>
            <ApartmentImage style={{ backgroundImage: "url(" + apartmentImage.url + ")" }}>
                <ApartmentImageDetails>
                    <h4>${price}<span> / dan</span></h4>
                    <h3>{title}</h3>
                </ApartmentImageDetails>
            </ApartmentImage>
            <ApartmentInfo>
                <ul>
                <li>
                    <BedOutlinedIcon/>
                    <h4>{numberOfRooms}</h4>
                  </li>
                  <li>
                    <GarageOutlinedIcon/>
                    <h4>{numberOfParkingPlace}</h4>
                  </li>
                  <li>
                    <ViewQuiltOutlinedIcon/>
                    <h4>{propertySize}m2</h4>
                  </li>
                </ul>
            </ApartmentInfo>
            <OwnerApartment>
                <Avatar src="/small-avatar.png" sx={{ width: 30, height: 30 }}/>
                <span>{owner}</span>
            </OwnerApartment>
        </ApartmentContainer>
    </Link>
  )
}

export default ApartmentCard

const ApartmentContainer = styled.div`
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
`

const ApartmentImage = styled.div`
    width: 100%;
    height: 200px;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: end;
`

const ApartmentImageDetails = styled.div`
    padding: 20px 15px;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    > h4 {
        font-size: 1.2rem;
        margin: 0;
        line-height: 1em;
        color: white;
        font-weight: 500;

        > span {
            font-size: 0.9rem;
        }
    }

    > h3 {
        margin: 0;
        line-height: 1em;
        padding-top: 10px;
        font-weight: 500;
        color: white;
    }
`

const ApartmentInfo = styled.div`
    padding: 10px 20px 10px 20px;

    > ul {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    list-style-type: none;
    justify-content: center;
    align-content: center;
    margin: 0;
    padding: 0;

    > li {
      font-size: 0.9rem;
      color: #222;
      line-height: 1em;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      align-items: center;

      > .MuiSvgIcon-root {
        width: 25px !important;
        height: 25px !important;
        color: #666 !important;
      }

      > h4{
          margin: 0;
          padding-top: 7px;
          font-size: 0.8rem;
          color: #666;
          font-weight: 500;
      }
    }
  }
`

const OwnerApartment = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 30px 10px 30px;
    border-top: 1px solid #eee;

    > span {
        margin-left: 10px;
        font-size: 0.8rem;
        font-weight: 600;
    }
`