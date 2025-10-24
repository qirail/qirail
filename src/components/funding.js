import React from 'react'
import { fundingData } from '../data/funding.data';

const Funding = () => {
	return (
		<section id='funding' className="p-6 dark:bg-gray-800 dark:text-gray-100">
			<div className="container p-4 mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">Funding & Support</h2>
				<p className="text-gray-400 mb-8">Proudly supported by leading research and funding organizations</p>
			</div>
			
			{/* Backdrop container with subtle gradient */}
			<div className="container mx-auto relative">
				<div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 overflow-hidden">
					{/* Subtle background glow effects */}
					<div className="absolute top-0 left-0 w-96 h-96 bg-violet-400/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl"></div>
					
					{/* Logos container */}
					<div className="relative z-10 flex flex-wrap justify-center items-center gap-8">
						{fundingData.map((item, index) => {
							// Vary sizes for visual interest (cycle through large, medium, small)
							const sizeClass = 
								index % 3 === 0 ? 'w-80 h-56' :  // Large
								index % 3 === 1 ? 'w-64 h-48' :  // Medium
								'w-56 h-44';                    // Small
							
							return (
								<div
									key={index}
									className={`
										${sizeClass}
										flex flex-col items-center justify-center
										p-4
										transition-all duration-300 ease-in-out
										hover:scale-110
										hover:drop-shadow-[0_10px_30px_rgba(167,139,250,0.4)]
										cursor-pointer
										group
									`}
								>
									<img
										src={item.image}
										alt={item.title || 'Funding partner'}
										className="max-w-full max-h-full object-contain transition-all duration-300"
									/>
									{item.title && (
										<p className="text-xs text-gray-400 mt-2 text-center transition-opacity duration-300">
											{item.title}
										</p>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Funding