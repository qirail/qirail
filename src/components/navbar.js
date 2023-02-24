import React, { useState } from 'react'



function NavBar() {

  const sections = [
    "Home",
    "About",
    "Team",
    "WhatWeDo",
    "Milestones",
    "Collab",
    "Funding",
    "Alumni",
    // "Upcoming",
    "Publication",
    "Gallery",
    // "Positions",
    "Contact"
  ];

  const [toggle, toggleNav] = useState(false);
  return (
    <div className={`'' ${toggle ? 'bg-black w-full min-h-full fixed opacity-70 flex items-center justify-around' :
      'bg-black fixed rounded-full w-10 h-10 right-7 top-7 md:w-20 md:h-20 cursor-pointer animate-bounce'}`}
      onClick={() => toggleNav(!toggle)}>

      {/* default */}
      <div className={`${toggle ? 'hidden' : 'text-white text-xl absolute inset-0 flex items-center justify-center'}`}>
        #
      </div>

      {/* if clicked */}
      <ul className={`${toggle ? 'text-white text-2xl flex-col justify-around md:text-5xl md:grid grid-cols-2 gap-8 lg:grid-cols-3' : 'hidden'}`}>

        {
          sections.map(
            item => <li className="hover-underline m-2"> {item}</li>
          )
        }
      </ul>

    </div>
  )
}

export default NavBar
