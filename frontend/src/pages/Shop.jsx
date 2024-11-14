import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/newCollections/NewCollections'
import NewsLetter from '../components/newsLetter/NewsLetter'
// Import images
import carousel1 from '../components/assets/carousel/carousel1.jpg';
import carousel2 from '../components/assets/carousel/carousel2.jpg';
import carousel3 from '../components/assets/carousel/carousel3.jpg';
import carousel4 from '../components/assets/carousel/carousel4.jpg';
import carousel5 from '../components/assets/carousel/carousel5.jpg';
import carousel6 from '../components/assets/carousel/carousel6.jpg';

import playful from '../components/assets/playful.mp4'


function Shop() {
  // Images arr 
  let slidesArr = [

    carousel1,carousel2, carousel3, carousel4, carousel5, carousel6
    
  ]




  return (
    <div>
      <Hero slides={slidesArr} />
      <img src="../components/assets/carousel/carousel6.jpg" alt="" loading="lazy"/>
      <Popular/>
      {/* <Offers/> */}

        <div className="w-full">
          <video className="w-[100%]" autoPlay loop muted loading="lazy">
            <source src={playful} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      <NewCollections />
      <NewsLetter/>
    </div>
  )
}

export default Shop