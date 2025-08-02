import React from 'react'
import { default as TeamCard } from './teamCard'
import { mainTeam, clinicalTeam } from '../data/team.data';

const Team = () => {
	return (
		// <div>Team</div>
		<section id='team' className="py-6 dark:bg-gray-800 dark:text-gray-100">
			<div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
				<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl mb-5">Our Team</h1>
				<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">{mainTeam.title}</p>
				<div className="flex flex-row flex-wrap justify-center mt-8">
					{
						mainTeam.members.map((member, idx) => (
							<TeamCard
								name={member.name}
								about={member.about}
								department={member.department}
								src={member.image}
								desig={member.designation}
								email={member.email}
								linkedin={member.linkedin}
							/>
						))
					}

				</div>

				{
					clinicalTeam.subTeam.map((sub, idx) => (
						<>
							{/* <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">{sub.title}</h1> */}
							<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">{sub.title}</p>
							<div className="flex flex-row flex-wrap justify-center mt-8">
								{
									sub.members.map((member, idx) => (
										<TeamCard
											name={member.name}
											about={member.about}
											department={member.department}
											src={member.image}
											desig={member.designation}
										/>
									))
								}
							</div>
						</>
					))
				}

			</div>
		</section >
	)
}

export default Team