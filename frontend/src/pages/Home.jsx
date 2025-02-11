import React from 'react'
import Hero from "../components/Hero";
import OurPolicy from "../components/OurPolicy.jsx";
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx';
import NewsletterBox from '../components/NewsletterBox.jsx';




const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
        <BestSeller  />
        <OurPolicy/>
        <NewsletterBox/>
      
    </div>
  )
}

export default Home