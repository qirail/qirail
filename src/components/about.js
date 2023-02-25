import React from 'react'
import img_1 from "../assets/images/labImage_1.png"
// import img_2 from "../assets/images/labImage_2.png"

const About = () => {
	return (
		<div id = "about">
		<section className="bg-white dark:bg-gray-900">
			<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
				<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
					<p className="mb-4">
						Quanititaive Imaging Research and Artificial Intelligence Lab
						was started in Radiation Oncology department in Christian Medical College (CMC), Vellore in 2020 .
						Our vision is to be a premier laboratory of artificial intelligence (AI),
						quantitative imaging and Radiation Oncology in India.
						We have embarked on this mission to address various important issues in the fields by
						combining our strengths in Radiation Oncology, Medical imaging,
						Bioinformatics, Data science, Biology, and Medicine.
					</p>
					<p>The following are a few highlights of our current research focuses:</p>
				
					<ul className="space-y-4">
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 className="font-medium">Development of novel AI strategies for prognosis <br/>and outcome prediction, disease classification and therapeutic guidance.</h4>
						</div>
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<h4 className="font-medium">Benchmarking Electronic Patient Reported Outcomes for digital health technology.</h4>
						</div>
					</li>
				</ul>
						
				
				</div>
				<div className="grid grid-cols-2 gap-4 mt-8">
					{/* <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
					<img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" /> */}
					<img className="w-full rounded-lg" src={img_1} alt="office content 1" />
					{/* <img className="mt-4 w-full lg:mt-10 rounded-lg absolute mt-5" src={img_2} alt="office content 2" /> */}
				</div>
			</div>
		</section>
	</div>
	)
}

export default About