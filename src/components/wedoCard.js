import React from 'react'

function WeDoCard({ item }) {
    return (
        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                    <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                    <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                    <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                </svg>
            </div>

            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xs tracking-wider uppercase dark:text-violet-400">{item.title}</span>
                {
                    item.points.map(
                        (point, idx) => (
                            <ul key={idx}>
                                <li className="text-xl font-bold md:text-2xl">{point.tag}</li>
                                <li className="mt-4 dark:text-gray-300">{point.sub}</li>
                            </ul>
                        )
                    )
                }

            </div>
        </div>
    )
}

export default WeDoCard
