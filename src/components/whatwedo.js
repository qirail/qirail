import React from 'react'
const WhatWeDo = () => {
	return (
		<section id='whatwedo' className="dark:bg-gray-800 dark:text-gray-100">
			<div className="container mx-auto flex flex-col p-6">
				<h2 className="py-4 text-3xl font-bold text-center">What We Do</h2>
				<div className="divide-y divide-gray-700">
					<div className="group grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div className="flex items-center justify-center lg:col-span-1 col-span-full">
							{/* <span className="material-icons text-9xl text-blue-500">&#xe3dc;</span> */}
							<span className="material-icons text-9xl text-blue-500 group-hover:text-violet-400">&#xe3b5;</span>
							{/* <span className="material-icons text-9xl text-blue-500">&#xe9fe;</span> */}
						</div>
						<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
							<span className="text-2xl tracking-wider uppercase text-violet-400">Focus</span>
							<ul>
								<li className="text-xl font-bold md:text-2xl">Develop robust computational methods for extracting quantifiable image descriptors (radiomics) from medical images</li>
								<li className="mt-4 dark:text-gray-300">Use models to develop clinical decision support systems</li>
							</ul>
							<ul>
								<li className="text-xl font-bold md:text-2xl">Use wide variety of imaging modalities and diseases</li>
								<li className="mt-4 dark:text-gray-300">Help the clinician make more informed decisions about the prognosis and classification of the disease types</li>
							</ul>
							<ul>
								<li className="text-xl font-bold md:text-2xl">Electronic Patient reported Outcome measures</li>
								<li className="mt-4 dark:text-gray-300">Use digital technology to capture PROMS realtime</li>
							</ul>
						</div>
					</div>
					<div className="group grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div className="flex items-center justify-center lg:col-span-1 col-span-full">
							<span className="material-icons text-9xl text-blue-500 group-hover:text-violet-400">&#xe43f;</span>
						</div>
						<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
							<span className="text-2xl tracking-wider uppercase text-violet-400">Study</span>
							<ul>
								<li className="text-xl font-bold md:text-2xl">Image descriptors, based on both conventional machine learning and deep learning methods</li>
								<li className="mt-4 dark:text-gray-300"></li>
							</ul>
							<ul>
								<li className="text-xl font-bold md:text-2xl">Standard QoL measures</li>
								<li className="mt-4 dark:text-gray-300"></li>
							</ul>
						</div>
					</div>
					<div className="group grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div className="flex items-center justify-center lg:col-span-1 col-span-full">
							<span className="material-icons text-9xl text-blue-500 group-hover:text-violet-400">&#xf049;</span>
						</div>
						<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
							<span className="text-2xl tracking-wider uppercase text-violet-400">Create</span>
							<ul>
								<li className="text-xl font-bold md:text-2xl">Individualized biomarkers for precision diagnosis and predictive modelling</li>
								<li className="mt-4 dark:text-gray-300"></li>
							</ul>
							<ul>
								<li className="text-xl font-bold md:text-2xl">Benchmark e - PROMS for domain specific use that are universal and clinically implementable Distributed learning platforms that level the playing field for researchers and innovators from smaller groups</li>
								<li className="mt-4 dark:text-gray-300"></li>
							</ul>
							<ul>
								<li className="text-xl font-bold md:text-2xl">Fair, accessible and ethical AI solutions</li>
								<li className="mt-4 dark:text-gray-300"></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhatWeDo
