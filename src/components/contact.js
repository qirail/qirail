import React from 'react'
import doodle from "../assets/svg/doodle.svg"

const Contact = () => {
  return (
    <div id='contact' className=' dark:bg-gray-800 dark:text-gray-100'>
    <div  className="md:divide-x grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
          <div className="dark:text-gray-400"> <q>We welcome enthusiastic students who share our passion for research. 
          If you are interested in joining our team, you can explore different opportunities: internships, 
          project staff positions, etc. However, we expect a minimum commitment of 3 months.</q>

</div>
        </div>
        <img src={doodle} alt="" className="p-6 h-52 md:h-64" />
      </div>
      {/* <div className="py-6 md:py-0 md:px-6"> */}
      <div className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
        <h1 className="text-4xl font-bold">Address</h1>
        <p className="pt-2 pb-4">Contact us for any queries ...</p>
        <div className="space-y-4">
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            <span>Quantitative Imaging Research and
              Artificial Intelligence Lab<br />
              Department of Radiation Oncology, <br />Unit II <br />
              Christian Medical College Vellore</span>
          </p>
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span><a href='tel:0416-2282046'>0416-2282046</a></span>
          </p>
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span><a href='mailto:hannah.thomas@cmcvellore.ac.in'>hannah.thomas@cmcvellore.ac.in</a></span>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact