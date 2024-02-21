import React from 'react'
// import img_1 from "../assets/images/labImage_1.png"
// import img_2 from "../assets/images/labImage_2.png"

const About = () => {
	return (
		<section id = "about" className=" dark:bg-gray-800 dark:text-gray-100">
			<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
				<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
					<p className="mb-4">
						Quantitative Imaging Research and Artificial Intelligence Lab
						was started in Radiation Oncology department in Christian Medical College (CMC), Vellore in 2020.
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
							<i class="material-icons dark:text-violet-400">&#xe061;</i>
							<h4 className="font-medium">Development of novel AI strategies for prognosis <br/>and outcome prediction, disease classification and therapeutic guidance.</h4>
						</div>
					</li>
					<li className="space-y-1">
						<div className="flex items-center space-x-2">
							<i class="material-icons dark:text-violet-400">&#xe061;</i>
							<h4 className="font-medium">Benchmarking Electronic Patient Reported Outcomes for digital health technology.</h4>
						</div>
					</li>
				</ul>	
				</div>
				<div className="p-5">
				<iframe className="border-none w-full rounded-lg" src="https://lumalabs.ai/embed/4e052a04-fb77-45c9-bf3e-b93ee2526c80?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="800" height="500" frameborder="0" title="luma embed"></iframe>
					{/* <img className="w-full rounded-lg" src={img_1} alt="office content 1" /> */}
				</div>
			</div>
		</section>
	)
}

export default About