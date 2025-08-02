import React from 'react'
import logo from "../assets/images/logo.png"
// import sample from "../assets/videos/ctcrop.mp4"
// import ct from "../assets/videos/ct.gif"s
import ct from "../assets/videos/sagital.gif"

const Hero = () => {
  return (
    <section id='home' className="bg-black text-gray-100 w-full h-screen bg-cover bg-no-repeat bg-center bg-fixed" style={{
      backgroundImage: `url(${ct})`,
    }}>
      {/* <video className='absolute inset-0 object-cover w-full h-screen' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video> */}
      <div className="relative bg-gray-900 bg-opacity-75 w-full h-screen">
        <div className="container flex flex-col justify-center p-5 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between h-screen">
          <div className="flex flex-col justify-center p-5 text-center rounded-sm lg:max-w-md 
          xl:max-w-lg
          mx-auto
          "
          >
      {/* <div className="relative bg-gray-900 bg-opacity-75 w-full h-screen">
        <div className="container flex flex-col justify-center p-5 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between h-screen">
          <div className="flex flex-col justify-center p-5 text-center rounded-sm lg:max-w-md 
          xl:max-w-lg lg:text-left md:ml-10
          mx-auto
          "
          > */}
            <img src={logo} alt="logo" className="object-contain h-20 sm:h-40 lg:h-50 xl:h-60 2xl:h-70" />
            
            <h1 className="text-5xl font-bold leading-none sm:text-7xl">QIR
              <span className="text-violet-400">AI</span>L
            </h1>
            <p className="mt-6 mb-8 text-2xl sm:mb-12">Quantitative Imaging Research and
              <br className="hidden md:inline lg:hidden" /><span className="text-violet-400"> Artificial Intelligence</span> Lab.
            </p>
            <p className="mt-6 mb-8 text-base sm:mb-12">An interdisciplinary research group anchored in Radiation Oncology, working with diverse teams
              <br 
              className="hidden md:inline lg:hidden" 
              /> @ Christian Medical College Vellore.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
            {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"> */}
              <a rel="noopener noreferrer" href="#about" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900 hover:bg-blue-500">About</a>
              <a rel="noopener noreferrer" href="#upcoming" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 hover:border-blue-500">Events</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero
