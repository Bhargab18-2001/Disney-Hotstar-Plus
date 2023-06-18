import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from "react-router-dom"
import db from '../firebase';
import { collection, query, where, doc, getDoc, data } from 'firebase/firestore';
import { render } from '@testing-library/react';

function Detail() {

  const {id} = useParams();
  const [movie, setMovie] = useState();
  //grab the movie info from db
  useEffect(() => {
    async function fetchData() {
    const dataRef = doc(db, "movies", id);
    const dataSnap = await getDoc(dataRef);
    if(dataSnap.exists()) {
            //save the movie data
           // console.log("data was ", dataSnap.data());
            setMovie(dataSnap.data());
      }else{
              //redirect to homepage
      }
    }
    fetchData();
  
  // console.log("data is ", fetchData());
   
   //console.log("all done", movie);
  
  },[]);
//console.log("out of function", movie);

  
  //     if(dataSnap.exists()) {
    //       //save the movie data
    //       setMovie(dataSnap.data());
    //     }else{
      //       //redirect to homepage
      //     }
    //   // }, [])
    // useEffect(() => {
    //   const getMovie = async (id) => {
    //     const movieSnapshot = await getDoc(doc(db, 'movies', id));
    //       if (movieSnapshot.exists()) {
    //         setMovie( movieSnapshot.data());
    //       } else {
    //           console.log("movie doesn't exist");
    //       }
    //   };
    // }, []);



  // console.log("movie is ", movie);
  if (!movie) {
    return(
    <Loader>
      <h1> Loading Page... </h1> 
    </Loader>
    );
  }
 // 2018 • 7m • Family, Fantasy, Kids, Animation
  //"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
   return (
     <Container>
      <Background>
        <img src={movie.backgroundImg} alt="" />
      </Background>
      <ImgTitle>
        <img src={movie.titleImg} alt="" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <img src="" alt="" />
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
      {movie.subTitle}
      </SubTitle>
      <Description>
        {movie.description}
      </Description>
    </Container>
  )
}

// A Chinese mom who is sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

   img {
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
`
const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;
`
const PlayButton= styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198)
  }
`
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`
const AddButton= styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span{
    font-size: 30px;
    color: white;
  }

`
const GroupWatchButton= styled(AddButton)`
  background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`
const Loader = styled.div`
  padding-top: calc(45vh);
  display: flex;
  justify-content: center;
  align-items: center;
`