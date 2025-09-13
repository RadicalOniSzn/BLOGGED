import React from 'react'
import Nav from "../components/Nav";
import Hero from '../components/Hero';
import LatestArticle from '../components/LatestArticle';
import ChooseCategory from '../components/ChooseCategory';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

import Card from '../components/Card';

const featuredData = [
  {
    id: 1,
    image: "/Image (1).png",
    category: 'Feautured',
    date: 'June 12, 2023',
    title: 'Global Tech Leaders Gather For Annual Innovation',
    description: "Industry titans from Silicon Valley to Tokyo converged at this year's Global Tech Summit to discuss emerging",
    author: "By Micheal Chen"
  },
]


const Home = () => {
  return (
    <div className='overflow-hidden bg-gray-100'>
        <Nav />
        <Hero/>
        {/* <LatestArticle/> */}
        {/* <Menu/> */}
        <ChooseCategory/>
        <Card  Card={featuredData}/>
        <Footer/>

    </div>
  )
}

export default Home;