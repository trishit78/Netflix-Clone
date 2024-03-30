import React from 'react' 
import Navbar from '../Navbar/Navbar'

import Row from '../Row/Row'
import requests from '../../Requests'
import Banner from '../Banner/Banner'
import './HomeScreen.css'
function HomeScreen() {
  return (
    <>
    <div className='homeScreen'>
        <Navbar/>
        <Banner/>
        <Row
        title="NETFLIX ORIGNAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
    </>
  )
}

export default HomeScreen
