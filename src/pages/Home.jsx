import React from 'react'
import Nav from "../components/Nav";
import Hero from '../components/Hero';
import LatestArticle from '../components/LatestArticle';

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero/>
        <LatestArticle/>

    </div>
  )
}

export default Home;