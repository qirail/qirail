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
  Upcoming,
  Publications,
  Contact,
  Footer
} from './components';
import Gallery from "./gallery"


function App() {
  return (
    <div className="App scroll-smooth w-full">
      <Hero />
      <About />
      <Team />
      <WhatWeDo />
      <Milestones />
      <Collab />
      <Funding />
      <Alumni />
      <Upcoming />
      <Publications />
      <Gallery />
      {/* <Positions /> */}
      <Contact />
      <Footer />
      <NavBar />
    </div>
  );
}

export default App;
