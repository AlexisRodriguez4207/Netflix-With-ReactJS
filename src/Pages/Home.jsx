import React from 'react'
import Main from '../Components/Main'
import Navbar from '../Components/Navbar'
import Row from '../Components/Row'
import request from '../Requests'

const Home = () => {
  return (
    <>
    <Main />
    <Row title= 'Up Coming' fetchURL={request.requestUpcoming}/>
    <Row title= 'Popular' fetchURL={request.requestPopular}/>
    <Row title= 'Trending' fetchURL={request.requestTrending}/>
    <Row title= 'Horror' fetchURL={request.requestHorror}/>
    <Row title= 'Top Rated' fetchURL={request.requestTopRated}/>
    </>
  )
}

export default Home