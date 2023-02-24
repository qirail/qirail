import React from 'react'
import CollabCard from "./collabCard"
import { collabdata } from "../data/collaborators.data"

const Collab = () => {
  return (


    <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl mb-5">Collaborating Groups</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-8">
          {
            collabdata.map((item, index) => (
              <CollabCard key={index}
                props={item} />

            ))
          }
        </div>
      </div>
    </section >

  )
}

export default Collab


