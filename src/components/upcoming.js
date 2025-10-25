import React from 'react'
import workshop from "../assets/Events/Radiomics_Workshop_Flyer_Schedule.pdf";
import HNCA from "../assets/Events/HNCS brochure and reg.pdf";

const Upcoming = () => {
  const events = [
    {
      type: 'upcoming',
      date: 'NOV',
      day: '14-15',
      year: '2025',
      title: 'Workshop on Radiomics and Auto Segmentation',
      description: 'A two-day workshop introducing clinicians, medical physicists and imaging researchers to radiomics and autosegmentation with emphasis on practical implementation. Includes hands-on sessions using accessible tools for image segmentation, radiomics feature extraction, and machine learning model building.',
      location: 'Radiation Oncology, CMC Vellore, Ranipet Campus',
      time: '9:00 AM to 4:30 PM',
      link: workshop
    },
    {
      type: 'past',
      date: 'SEP',
      day: '12-13',
      year: '2025',
      title: 'Head and neck Survivorship Program 2025',
      description: 'This event celebrates head and neck cancer survivors, promoting their quality of life through education, rehabilitation, psychosocial support, and community reintegration. It also features scientific sessions on multidisciplinary innovations in survivorship care.',
      location: 'CMC Vellore, Ranipet Campus',
      time: null,
      link: HNCA
    },
    {
      type: 'past',
      date: 'JUN',
      day: '24',
      year: '2025',
      title: 'PARAM Shavak Supercomputer Inauguration',
      description: 'Installation and demonstration of the PARAM Shavak Supercomputer at CMC Ranipet. A collaborative initiative between CMC Vellore and C-DAC Pune to provide high-performance computational power for medical research, with live demonstrations of applications in radiotherapy.',
      location: 'CMC Vellore, Ranipet Campus',
      time: null,
      link: 'https://cdac.in/index.aspx?id=print_page&print=lu_CMC-VR-MoU'
    },
    {
      type: 'past',
      date: 'MAR',
      day: '13-15',
      year: '2025',
      title: 'Annual Winter Symposium',
      description: '2nd National Symposium on Health Data & Artificial Intelligence hosted by the Biomedical Informatics Unit. An opportunity to engage with clinicians, researchers, engineers, entrepreneurs and policy experts at the forefront of Digital Health Data and AI.',
      location: 'Christian Medical College, Vellore',
      time: null,
      link: 'http://ai.cmcvellore.edu.in/'
    },
    {
      type: 'past',
      date: 'MAR',
      day: '17-18',
      year: '2023',
      title: 'National Symposium on Health Data & Artificial Intelligence',
      description: '',
      location: 'Christian Medical College, Vellore',
      time: null,
      link: 'https://ai.cmcvellore.edu.in/highlights/'
    }
  ];

  return (
    <div id='upcoming' className="dark:bg-gray-800 dark:text-gray-50 py-16">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl mb-12">Events</h1>
        
        <div className="max-w-5xl mx-auto space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className={`
                flex flex-col md:flex-row gap-5 p-6 
                rounded-lg border  
                transition-all duration-300 ease-in-out

                ${event.type === 'upcoming'
                ? 'bg-gradient-to-r from-violet-800 to-violet-950 border-violet-400 hover:bg-violet-500/20 hover:shadow-[0_10px_30px_rgba(167,139,250,0.4)]'
                : 'bg-gradient-to-r from-gray-900 to-gray-950 border-gray-700 hover:bg-gray-900 hover:border-violet-400 hover:shadow-[0_10px_30px_rgba(167,139,250,0.3)]'
                }
                
                hover:translate-x-1
                ${event.type === 'past' ? 'opacity-60 hover:opacity-80' : ''}
              `}
            >
              {/* Date Block */}
              <div className={`
                flex-shrink-0 w-full md:w-24 text-center p-4 rounded-md font-bold
                ${event.type === 'upcoming' ? 'bg-violet-400 text-gray-900' : 'bg-gray-600 text-white'}
              `}>
                <div className="text-sm">{event.date}</div>
                <div className="text-2xl my-1">{event.day}</div>
                <div className="text-sm">{event.year}</div>
              </div>

              {/* Event Details */}
              <div className="flex-1 space-y-2">
                <div>
                  <span className={`
                    inline-block px-3 py-1 text-xs font-bold rounded-full
                    ${event.type === 'upcoming' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-600 text-white'}
                  `}>
                    {event.type === 'upcoming' ? 'UPCOMING' : 'PAST'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-100">
                  {event.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex flex-col gap-2 text-sm">
                  {event.time && (
                    <div className="flex items-center text-gray-400">
                      <span className="mr-2">🕐</span>
                      {event.time}
                    </div>
                  )}
                  <div className="flex items-center text-gray-400">
                    <span className="mr-2">📍</span>
                    {event.location}
                  </div>
                </div>

                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center py-2 space-x-2 text-sm text-violet-400 hover:text-violet-300"
                  >
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Upcoming