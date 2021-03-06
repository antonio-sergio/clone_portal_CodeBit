import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Menu from './components/menu/Menu';
import Banner from './components/banner/Banner';
import WhoaAreWe from './components/who-are-we/Who-are-we';
import WhatWeDo from './components/what-we-do/What-we-do';
import HowWeDo from './components/how-we-do/How-we-do';
import Contact from './components/contact/Contact';
import PauseOnHover from './components/caurosel/caurosel';

function App() {
  return (
    <div className="App">
      <Menu />
      <PauseOnHover />
      <Banner />
      <WhoaAreWe />
      <WhatWeDo />
      <HowWeDo />
      <Contact />
    </div>
  );
}

export default App;
