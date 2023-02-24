import React from 'react'
import logo from "../assets/images/logo.png"
import sample from "../assets/videos/ct.mp4"
import RoundNavigationButton from './RoundNavigationButton';
const items = [
  {
    id: 1,
    url: "./",
    label: "Home"
  },
  {
    id: 2,
    url: "./",
    label: "About"
  },
  {
    id: 3,
    url: "./",
    label: "Team"
  },
  {
    id: 4,
    url: "./",
    label: "What We Do"
  },
  {
    id: 5,
    url: "./",
    label: "Milestones"
  },
  {
    id: 6,
    url: "./",
    label: "Collab"
  },
  {
    id: 7,
    url: "./",
    label: "Funding"
  },
  {
    id: 8,
    url: "./",
    label: "Alumni"
  },
  {
    id: 9,
    url: "./",
    label: "Upcomming"
  },
  {
    id: 10,
    url: "./",
    label: "Publications"
  },
  {
    id: 11,
    url: "./",
    label: "Gallery"
  },
  {
    id: 12,
    url: "./",
    label: "Contact"
  },
]

const Hero = () => {
  return (
    <section className="dark:bg-gray-900 dark:text-gray-100 w-full h-full">
      <RoundNavigationButton items={items} />

      <video className='absolute inset-0 object-cover w-full h-full' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
      <div className="relative bg-gray-900 bg-opacity-75 w-full h-screen">

        <div className="container flex flex-col justify-center p-5 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-5 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

            <img src={logo} alt="" className="object-contain h-20 sm:h-40 lg:h-60 xl:h-80 2xl:h-100" />
            <h1 className="text-5xl font-bold leading-none sm:text-9xl">QIR
              <span className="dark:text-violet-400">AI</span>L
            </h1>
            <p className="mt-6 mb-8 text-2xl sm:mb-12">Quantitative Imaging Research and
              <br className="hidden md:inline lg:hidden" /><span className="dark:text-violet-400"> Artificial Intelligence</span> Lab.
            </p>
            <p className="mt-6 mb-8 text-base sm:mb-12">Research group in the Radiation Oncology Department
              <br className="hidden md:inline lg:hidden" /> @ Christian Medical College Vellore.
            </p>
            {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
			</div> */}
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          {/* <img src={sample_img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero
