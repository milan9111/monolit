import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SectionHeroTop from './components/SectionHeroTop';
import PhotoGallery from './components/PhotoGallery';
import PhotoGalleryText from './components/PhotoGalleryText';
import Price from './components/Price';
import Contacts from './components/Contacts';
import './styles/app.css';
import MapAddress from './components/MapAddress';
import Footer from './components/Footer';
import NavigationRigth from './components/NavigationRigth';


 
function App() {

  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);
  
  return (
    <>
    <Header />
      <main className='main'>
         <SectionHeroTop />
         <PhotoGallery/>
         <PhotoGalleryText />
         <Price />
         <Contacts />
         <MapAddress />
         <NavigationRigth offset={offset}/>
      </main>
    <Footer />
    </>
  );
}

export default App;
