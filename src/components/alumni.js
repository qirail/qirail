import React from 'react'
import { alumniData } from '../data/alumni.data'

const Alumni = () => {
  return (
    <section id='alumni' className="py-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Former Members</h1>
        <p className="max-w-2xl text-center dark:text-gray-400"></p>
        <div className="flex flex-row flex-wrap justify-center">
          {
            alumniData.map((alumni, indx) => (
              <div key={indx} className="group flex flex-col justify-center m-8 text-center">
                <img 
                  alt="" 
                  className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-transparent transition-all group-hover:ring-2 group-hover:ring-violet-400 group-hover:shadow-[0_0_25px_rgba(167,139,250,0.8)]" 
                  src={alumni.image} 
                />
                <p className="text-xl font-semibold leading-tight">{alumni.name}</p>
                <p className="dark:text-gray-400">{alumni.designation}</p>
                <p className="dark:text-gray-400">{alumni.from}</p>
                <div className="flex items-center justify-center pt-3 mt-2 border-t-2 border-gray-300 dark:border-gray-600">
                  <a rel="noopener noreferrer" href={alumni.linkedin} target="_blank" title="LinkedIn" className="dark:text-gray-100 hover:dark:text-violet-400 hover:text-violet-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                      <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Alumni