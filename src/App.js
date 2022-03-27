import React from 'react';
import Header from './components/Header';
import SectionHeroTop from './components/SectionHeroTop';
import PhotoGallery from './components/PhotoGallery';
import PhotoGalleryText from './components/PhotoGalleryText';
import Price from './components/Price';
import './styles/app.css';

import Contacts from './components/Contacts';
import Reviews from './components/Reviews';
import MapAddress from './components/MapAddress';
import NavigationRigth from './components/NavigationRigth';

import Footer from './components/Footer';


 
function App() {

  return (
    <>
    <Header />
      <main className='main'>
         <SectionHeroTop />
         <PhotoGallery/>
         <PhotoGalleryText />
         <Price />
         <Contacts />
         <Reviews />
         <MapAddress />
         <NavigationRigth />
      </main>
    <Footer />
    </>
  );
}

export default App;
