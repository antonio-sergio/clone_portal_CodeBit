import './App.css';
import Menu from './components/menu/Menu';
import Banner from './components/banner/Banner';
import AboutUs from './components/about-us/About-Us';
import WhatWeDo from './components/what-we-do/What-we-do';
import HowWeDo from './components/how-we-do/How-we-do';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <AboutUs />
      <WhatWeDo />
      <HowWeDo />
      <Contact />
    </div>
  );
}

export default App;
