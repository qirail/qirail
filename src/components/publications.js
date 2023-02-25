// import React, { useState } from 'react'
import astro from "../assets/publications/astro.jpg"
import jmp from "../assets/publications/jmp.png"


// const Item = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div id='publications' className="border rounded shadow-sm">
//       <button
//         type="button"
//         aria-label="Open item"
//         title="Open item"
//         className="flex items-center justify-between w-full p-4 focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <p className="text-lg font-medium">{title}</p>
//         <div className="flex items-center justify-center w-8 h-8 border rounded-full">
//           <svg
//             viewBox="0 0 24 24"
//             className={`w-3 text-gray-600 transition-transform duration-200 ${
//               isOpen ? 'transform rotate-180' : ''
//             }`}
//           >
//             <polyline
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeMiterlimit="10"
//               points="2,7 12,17 22,7"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </button>
//       {isOpen && (
//         <div className="p-4 pt-0">
//           <p className="text-gray-700">{children}</p>
//         </div>
//       )}
//     </div>
//   );
// };

const Publications = () => {
  return (
    // <div>Publications</div>
    // <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div id="publications">
      <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl mb-10">Publications</h1>
      {/* <div class="first-letter:max-w-xl sm:mx-auto lg:max-w-2xl"> */}
        {/* <div class="space-y-4">
        <Item title="2023">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
        <Item title="2022">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
        <Item title="2020">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
        <Item title="2019">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </Item>
      </div> */}
      <div className="flex flex-col lg:flex-row gap-2 justify-around w-full p-10 items-center">
        <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img src={jmp} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Framework for Machine Learning of CT and PET Radiomics to Predict
                Local Failure after Radiotherapy in Locally Advanced Head and Neck Cancers.</h2>
              <span className="text-sm dark:text-gray-400">Devakumar, D., Sunny, G., Sasidharan, B. K., Bowen, S. R., Nadaraj, A., Jeyseelan, L., Mathew, M., Irodi, A.,
                Isiah, R., Pavamani, S., John, S., & T Thomas, H. M. (2021).</span>
            </div>
            <div className="space-y-1">

              <a rel="noopener noreferrer" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8491314/" target="_blank" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img src={astro} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Can CBCT-Based Delta Radiomics Predict Normal Lung Toxicity during Thoracic Radiation?</h2>
              <span className="text-sm dark:text-gray-400">N. Jose, A.J. Varghese, H.M. Thomas, A. Irodi, J.C. Paul,
                M. Mathew, R. Isiah, S. John, H.F. Godson,
                T.B. Peace, S.P. Pavamani, D. Devadhas, B.K. Sasidharan (2022).</span>
            </div>
            <div className="space-y-1">

              <a rel="noopener noreferrer" href="https://doi.org/10.1016/j.ijrobp.2022.07.934" target="_blank" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
        
      {/* </div> */}
    </div>
  )
}

export default Publications