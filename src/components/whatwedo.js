import React from 'react'
import { default as WeDoCard } from './wedoCard'
import { whatWeDo } from '../data/whatWeDo.data';

const WhatWeDo = () => {
	return (
		// <div>WhatWeDo</div>
		<section id='whatwedo' className="dark:bg-gray-800 dark:text-gray-100">
			<div className="container mx-auto flex flex-col p-6">
				<h2 className="py-4 text-3xl font-bold text-center">What We Do</h2>
				<div className="divide-y divide-gray-700">
					{
						whatWeDo.map(
							(item, index) => (
								<div key={index}>
									<WeDoCard
										item={item}
									/>

								</div>
							)
						)
					}
				</div>
			</div>
		</section>
	)
}

export default WhatWeDo