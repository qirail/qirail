import React from 'react'

const Upcoming = () => {
  return (
    <div id='upcoming'>
    <div className="dark:bg-gray-800 dark:text-gray-50">
      <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl mb-10">Events</h1>
    <div className="container grid grid-cols-1 mx-auto p-5">
      
      <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto">
        <div className="flex flex-col items-center p-8 py-12 text-center">
          <span>March 13<sup>th</sup> - 15<sup>th</sup> 2025</span>
          <h1 className="py-4 text-5xl font-bold">ANNUAL WINTER SYMPOSIUM</h1>
          <p className="pb-0 text-xl font-bold">2<sup>nd</sup> National Symposium on Health Data & Artificial Intelligence</p>
          <p className="pb-6">Hosted by the Biomedical Informatics Unit, Christian Medical College, Vellore</p>
          <a rel="noopener noreferrer" href="http://ai.cmcvellore.edu.in/" target="_blank" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
          </a>
          {/* <span>March 17th - 18th 2023</span>
          <h1 className="py-4 text-5xl font-bold">NATIONAL SYMPOSIUM ON HEALTH DATA AND ARTIFICIAL INTELLIGENCE</h1>
          <p className="pb-6">An opportunity to engage with and learn from clinicians, researchers, engineers, entrepreneurs and policy experts who are at the forefront of Digital Health Data and artificial intelligence</p>
          <a rel="noopener noreferrer" href="http://ai.cmcvellore.edu.in/" target="_blank" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
          </a> */}
        </div>
      </div>


      <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
        
        {/* <div className="pt-6 pb-4 space-y-2">
          <span>12 June</span>
          <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
          <a rel="noopener noreferrer" href="google.com" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
            <span>Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div> */}
{/*         
        <div className="pt-6 pb-4 space-y-2">
          <span>12 June</span>
          <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
          <a rel="noopener noreferrer" href="google.com" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
            <span>Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
        <div className="pt-6 pb-4 space-y-2">
          <span>12 June</span>
          <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
          <a rel="noopener noreferrer" href="google.com" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
            <span>Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div> */}

      </div>
    </div>
  </div>
  </div>
  )
}

export default Upcoming