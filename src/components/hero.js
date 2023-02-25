import React from 'react'
import logo from "../assets/images/logo.png"
import sample from "../assets/videos/ctcrop.mp4"
import RoundNavigationButton from './RoundNavigationButton';
// import img_1 from "../assets/images/labImage_1.png"
const items = [
  {
    id: 1,
    url: "#home",
    label: "Home"
  },
  {
    id: 2,
    url: "#about",
    label: "About"
  },
  {
    id: 3,
    url: "#team",
    label: "Team"
  },
  {
    id: 4,
    url: "#whatwedo",
    label: "What We Do"
  },
  {
    id: 5,
    url: "#milestones",
    label: "Milestones"
  },
  {
    id: 6,
    url: "#collab",
    label: "Collab"
  },
  {
    id: 7,
    url: "#funding",
    label: "Funding"
  },
  {
    id: 8,
    url: "#alumni",
    label: "Alumni"
  },
  {
    id: 9,
    url: "#upcoming",
    label: "Upcoming"
  },
  {
    id: 10,
    url: "#publications",
    label: "Publications"
  },
  {
    id: 11,
    url: "#gallery",
    label: "Gallery"
  },
  {
    id: 12,
    url: "#contact",
    label: "Contact"
  },
]

const Hero = () => {
  return (
    <section id='home' className="dark:bg-gray-900 text-gray-100 dark:text-gray-100 w-full h-screen">
      <RoundNavigationButton items={items} />

      <video className='absolute inset-0 object-cover w-full h-screen' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
      <div className="relative bg-gray-900 bg-opacity-75 w-full h-screen">

        <div className="container flex flex-col justify-center p-5 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between h-screen">
          <div className="flex flex-col justify-center p-5 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left md:ml-10">

            <img src={logo} alt="" className="object-contain h-20 sm:h-40 lg:h-50 xl:h-60 2xl:h-70" />
            
            <h1 className="text-5xl font-bold leading-none sm:text-7xl">QIR
              <span className="dark:text-violet-400">AI</span>L
            </h1>
            <p className="mt-6 mb-8 text-2xl sm:mb-12">Quantitative Imaging Research and
              <br className="hidden md:inline lg:hidden" /><span className="dark:text-violet-400"> Artificial Intelligence</span> Lab.
            </p>
            <p className="mt-6 mb-8 text-base sm:mb-12">Research group in the Radiation Oncology Department
              <br className="hidden md:inline lg:hidden" /> @ Christian Medical College Vellore.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#about" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">About</a>
              <a rel="noopener noreferrer" href="#upcoming" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Upcoming Events</a>
            </div>
          </div>
          {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={img_1} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div> */}
        </div>
      </div>
    </section>

  )
}

export default Hero
