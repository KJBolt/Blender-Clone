import React from 'react';
import Navbar from '../components/Navbar'
import Banner from '../components/HomeComp/Banner';
import LatestNews from '../components/HomeComp/LatestNews';
import BlenderStudio from '../components/HomeComp/BlenderStudio';
import BlenderDevelopment from '../components/HomeComp/BlenderDevelopment';
import FreeOpenSource from '../components/HomeComp/FreeOpenSource';
import PartOfTheIndustry from '../components/HomeComp/PartOfTheIndustry';
import AboutPeople from '../components/HomeComp/AboutPeople';
import EcoSystem from '../components/HomeComp/EcoSystem';
import EverythingYouNeed from '../components/HomeComp/EverythingYouNeed';
import FreedomTOCreate from '../components/HomeComp/FreedomTOCreate';
import Footer from '../components/HomeComp/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />

      <Banner />
      <LatestNews />
      <BlenderStudio />
      <BlenderDevelopment />
      <FreeOpenSource />
      <PartOfTheIndustry />
      <AboutPeople />
      <EcoSystem />
      <EverythingYouNeed />
      <FreedomTOCreate />
      <Footer />
    </div>
  )
}

export default HomePage