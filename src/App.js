// import './App.css';
import {
  NavBar,
  Hero,
  About,
  Team,
  WhatWeDo,
  Milestones,
  Collab,
  Funding,
  Alumni,
  // Upcoming,
  Publications,
  Gallery,
  // Positions,
  Contact,
  Footer
} from './components';

function App() {
  return (
    <div className="App scroll-smooth w-full">
      <NavBar />
      <Hero />
      <About />
      <Team />
      <WhatWeDo />
      <Milestones />
      <Collab />
      <Funding />
      <Alumni />
      {/* <Upcoming /> */}
      <Publications />
      <Gallery />
      {/* <Positions /> */}
      <Contact />
      <Footer />

    </div>

  );
}

export default App;
