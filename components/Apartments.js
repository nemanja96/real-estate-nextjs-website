import React from 'react'
import styled from 'styled-components';
import ApartmentCard from './ApartmentCard.js';

const Apartments = ({ apartmentsData }) => {
  return (
    <ApartmentsContainer>
        <ApartmentsWrapper>
            {
                apartmentsData.map(({title, address, slug, city, price, apartmentImage, owner, numberOfRooms, numberOfParkingPlace, numberOfToalets, propertySize}) => (
                    <ApartmentCard
                        id={slug}
                        key={slug}
                        title={title}
                        address={address}
                        price={price}
                        slug={slug}
                        owner={owner}
                        city={city}
                        apartmentImage={apartmentImage}
                        numberOfRooms={numberOfRooms}
                        numberOfToalets={numberOfToalets}
                        numberOfParkingPlace={numberOfParkingPlace}
                        propertySize={propertySize}
                    />
                ))
            }
        </ApartmentsWrapper>
    </ApartmentsContainer>
  )
}

export default Apartments

const ApartmentsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;

    @media screen and (max-width: 770px){
        margin-top: 50px;
        margin-bottom: 50px;
    }
`

const ApartmentsWrapper = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    max-width: 1200px;

    @media screen and (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 650px){
        grid-template-columns: repeat(1, 1fr);
    }
`