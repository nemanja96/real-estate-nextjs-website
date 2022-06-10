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
    margin-top: 60px;
    margin-bottom: 100px;
`

const ApartmentsWrapper = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    max-width: 1200px;
`