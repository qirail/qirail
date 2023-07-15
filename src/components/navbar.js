import React from 'react'
import RoundNavigationButton from './RoundNavigationButton';
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
    // label: "Upcoming"
    label: "Events"
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

const NavBar = () => {
  return (
      <RoundNavigationButton items={items} />
  )
}

export default NavBar
