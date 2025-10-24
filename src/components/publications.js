import React from 'react'
import { publications } from '../data/publications.data';

const Publications = () => {
  return (
    <div id="publications" className='dark:bg-gray-800 dark:text-gray-100'>
      <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl mb-10 pt-5">Publications</h1>
      <div className="container grid gap-5 p-5 mx-auto lg:grid-cols-2 xl:grid-cols-3">
        {
          publications.reverse().map(item =>

            <div 
              key={item.num} 
              className="group rounded-xl flex flex-col md:flex-row items-center p-2 bg-gray-900 text-gray-100 space-y-3 space-x-3 border border-gray-900 hover:border-violet-400 hover:shadow-[0_10px_30px_rgba(167,139,250,0.3)] hover:-translate-y-3 transition-all duration-300"
            >
              <img src={item.thumbnail} alt="" className="rounded dark:bg-gray-500 flex-shrink-0 w-24 mb-0" />
              <div className="flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-base font-semibold">{item.title}</h2>
                  <p className="text-sm font-thin dark:text-gray-300">{item.authors}</p>
                  <p className="text-xs font-light dark:text-gray-500">{item.journal} ({item.year})</p>
                </div>
                <a rel="noopener noreferrer" href={item.link} target="_blank" className="inline-flex items-center py-2 space-x-2 text-xs dark:text-violet-400 group-hover:translate-x-3 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            )
        }
      </div>

    </div>
  )
}

export default Publications