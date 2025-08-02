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
              <div key={indx} className="flex flex-col justify-center m-8 text-center">
                <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={alumni.image} />
                <p className="text-xl font-semibold leading-tight">{alumni.name}</p>
                <p className="dark:text-gray-400">{alumni.designation}</p>
                <p className="dark:text-gray-400">{alumni.from}</p>
              </div>

            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Alumni