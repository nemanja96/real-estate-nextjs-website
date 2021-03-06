import React from 'react';
import { GraphQLClient , gql } from 'graphql-request';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export const getServerSideProps = async (context) => {
    const apartmentSlug = context.query.slug;
    const url = "https://api-eu-central-1.graphcms.com/v2/cl45ontud0oz701yvf32n60z2/master";
    const client = new GraphQLClient(url, {
        headers: {
        authorization : 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQ3MDU5MDUsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsNDVvbnR1ZDBvejcwMXl2ZjMybjYwejIvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDY2ZTU0NWYtMDlmNi00ZDcwLTk1ZWItMzU0OTQ3YWEyZDliIiwianRpIjoiY2w0NXQ2ODR0MHpoYTAxeXdhYjhvZ2V3MSJ9.HOGlLmH7bbOFR2NZXw4oIJYRRUzK0hd6AIuz4fZMMLApqziH8YkHoOgSE8eqVvkZpixGUj-7KDYDN-AyysqPOR2xitzu6V70igEEt3d7ukaDxgMhe2aYEM0swYsrMcwiJPDjbVdF1FMtgPG9vz3HwVnaL48uW8wmgWJIZkNq8WjiiJSARYsdTc0Ab-N-9CU-tAVdiS23xlT8RfVKC704L4S5Ity5hKSIvS5ivNdUZOm5EnL-8mz7MzTJorUjZ9pFyi8pOYoywngWMVvxlk95DNUKrsb8t1xzPSgLJws273DLiSH9pitfPj73UdccFtDFLnlkzNjbmDntM6EOb5mXJeeFoJdiyi4JzM_lGk-EiDOTCFxcaPqPsOc-ZkI9VflOmRNuZ4MuFc3ITkYgJ8D67L7NURHa6bB7F5cv9ymJQP1xeNN9Ws_PHorcco563YAyWI7vxhurFWvPQU_vASmy36WOxN58H9m6oowezuLsw3LQxlQjvZfuECoSWyxEaPER6Kp_KrRMBNvdUm4Daws_iLosbtix8C8w0_mShssmJ-WRfXXiQB9e42j1NqvwHbxotaA_L_N0G18XspXgf1mwG_t0hDH6kjYfFTvj6EAYHrCJDMZpSmf46NicHYWIJajWS80Y2ltWSM7kEm8GLu_V8RwDnJSDjLdND-3_VVYDf08',
    } })

    const apartmentQuery = gql`
    query($apartmentSlug: String!) {
        apartment(where: {
          slug: $apartmentSlug
        }) {
          title,
          address,
          price,
          numberOfRooms,
          numberOfToalets,
          numberOfParkingPlace,
          apartmentDescription,
          propertySize,
          numberOfPersons,
          city,
          owner,
          apartmentVideo {
            url
          },
          phone, 
          slug,
          apartmentImage {
            url
          }
        }
      }
    `

    const variables = {
        apartmentSlug
    }

      const data = await client.request(apartmentQuery, variables);
      const apartmentInfo = data.apartment;
      
      return {
          props: {
            apartmentInfo
          }
      }

} 

const SingleRoom = ({ apartmentInfo }) => {

  const videoUrl = apartmentInfo.apartmentVideo.url;

  return (
    <>
      <Head>
        <title>{apartmentInfo?.title} - Rezervi??ite Apartman - Nemanja Radivojevic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SingleRoomContainer>
        <SingleRoomImage style={{ backgroundImage: "url(" + apartmentInfo?.apartmentImage?.url + ")" }}></SingleRoomImage>
        <SingleRoomWrapper>
          <RoomMainInfo>
            <RoomTitleInfo>
              <div><Link href="/">Po??etna</Link> / <strong style={{ color: "#21af69" }}>{apartmentInfo?.title}</strong></div>
              <h2>{apartmentInfo?.title}</h2>
              <h3>{apartmentInfo?.address}, {apartmentInfo?.city}</h3>
            </RoomTitleInfo>
            <RoomPriceInfo>
              <h4>Cena: {apartmentInfo.price}$/dan</h4>
            </RoomPriceInfo>
          </RoomMainInfo>
          <RoomDetailsContainer>
            <RoomDetailsLeft>
              <RoomDetailsOverview>
                <h3>Pregled</h3>
                <ul>
                  <li>
                    <BedOutlinedIcon/>
                    <h4>{apartmentInfo.numberOfRooms}</h4>
                  </li>
                  <li>
                    <ShowerOutlinedIcon/>
                    <h4>{apartmentInfo.numberOfToalets}</h4>
                  </li>
                  <li>
                    <GarageOutlinedIcon/>
                    <h4>{apartmentInfo.numberOfParkingPlace}</h4>
                  </li>
                  <li>
                    <ViewQuiltOutlinedIcon/>
                    <h4>{apartmentInfo.propertySize} m2</h4>
                  </li>
                  <li>
                    <CalendarMonthOutlinedIcon/>
                    <h4>Slobodno</h4>
                  </li>
                </ul>
              </RoomDetailsOverview>
              <RoomDescription>
                <h3>Opis</h3>
                <p>{apartmentInfo.apartmentDescription}</p>
                <h3>Dokumenti</h3>
                <a href="#" download>PDF-Dokument</a><br />
                <a href="#" download>Drugi-PDF-Dokument</a>
              </RoomDescription>
              <VideoDetails>
                <h3>Video</h3>
                <video width="100%" controls>
                  <source src={videoUrl} type="video/mp4" />
                </video>
              </VideoDetails>
            </RoomDetailsLeft>
            <RoomDetailsRight>
              <OwnerDetails>
                <Avatar src="/small-avatar.png" sx={{ width: 50, height: 50 }}/>
                <h3>{apartmentInfo?.owner}</h3>
                <ContactOwner>Pozovite vlasnika</ContactOwner>
              </OwnerDetails>
            </RoomDetailsRight>
          </RoomDetailsContainer>
        </SingleRoomWrapper>
      </SingleRoomContainer>
    </>
  )
}

export default SingleRoom

const SingleRoomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fcfbfd;
`

const SingleRoomImage = styled.div`
  height: 500px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const SingleRoomWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-top: 40px;
  margin-bottom: 70px;
`

const RoomMainInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 630px){
      flex-direction: column;
    }
`

const RoomTitleInfo = styled.div`
  flex: 1;

  > div > a {
    color: #888;
    font-weight: 400;
    font-size: 1rem;
    transition: .2s all;
    
    &:hover{
      color: #21af69;
    }
  }

  > h2 {
    font-size: 2.3rem;
    margin: 0;
    line-height: 1em;
    font-weight: 400;
    margin-top: 10px;

    @media screen and (max-width: 630px){
      text-align: center;
    }
  }

  > h3 {
    margin: 0;
    line-height: 1em;
    padding-top: 15px;
    font-size: 1rem;
    color: #888;
    font-weight: 400;

    @media screen and (max-width: 630px){
      text-align: center;
    }
  }
`

const RoomPriceInfo = styled.div`

  > h4 {
    font-size: 2rem;
    margin: 0;
    line-height: 1em;
    font-weight: 500;
    color: #21af69;

    @media screen and (max-width: 630px){
      margin-top: 20px;
    }
  }
`

const RoomDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px){
      flex-direction: column;
    }
`

const RoomDetailsLeft = styled.div`
  flex: 0.7;
`

const RoomDetailsOverview = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px 40px 35px 40px;
  border-radius: 10px;
  margin-top: 40px;

  @media screen and (max-width: 550px){
    padding: 20px 20px 25px 20px;
  }

  > h3 {
    margin: 0;
    font-weight: 500;
    margin-bottom: 10px;

    @media screen and (max-width: 550px){
      text-align: center;
    }
  }

  > ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 550px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }

    > li {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 550px){
        margin-bottom: 15px;
      }

      > .MuiSvgIcon-root {
        width: 35px !important;
        height: 35px !important;
        color: #21af69 !important;

        @media screen and (max-width: 400px){
          width: 30px !important;
          height: 30px !important;
        }
      }

      > h4 {
        margin: 0;
        line-height: 1em;
        padding-top: 10px;
        font-weight: 400;
        font-size: 0.9rem;
        color: #666;
      }
    }
  }
`

const RoomDescription = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 30px 40px 35px 40px;
  border-radius: 10px;
  margin-top: 40px;

  @media screen and (max-width: 550px){
    padding: 20px 20px 25px 20px;
  }

  > h3 {
    margin: 0;
    font-weight: 500;
    margin-bottom: 10px;

    @media screen and (max-width: 550px){
      text-align: center;
    }
  }

  > p {
    font-size: 0.9rem;
    color: #666;

    @media screen and (max-width: 550px){
      text-align: center;
    }
  }

  > br {
    @media screen and (max-width: 550px){
      display: none;
    }
  }

  > a {
    color: #666;
    font-size: 0.9rem;
    transition: .1s all;

    &:hover{
      color: #21af69;
    }

    @media screen and (max-width: 550px){
      display: block;
      text-align: center;
    }
  }
`

const VideoDetails = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 30px 40px 35px 40px;
  border-radius: 10px;
  margin-top: 40px;

  @media screen and (max-width: 550px){
      padding: 20px 20px 25px 20px;
  }

  > h3 {
    margin: 0;
    font-weight: 500;
    margin-bottom: 20px;

    @media screen and (max-width: 550px){
      text-align: center;
    }
  }

  > video {
    margin: 0;
    padding: 0;
    height: auto !important;
  }
`

const RoomDetailsRight = styled.div`
  flex: 0.25;
  margin-top: 40px;
`

const OwnerDetails = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 30px 40px 35px 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    margin: 0;
    font-weight: 500;
    margin-top: 10px;
    text-align: center;
  }
`

const ContactOwner = styled(Button)`
  background: #21af69 !important;
  color: white !important;
  margin-top: 10px !important;
`