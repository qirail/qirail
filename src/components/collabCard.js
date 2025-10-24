import React from 'react';

function CollabCard({ props }) {
  return (
    <div className="container flex items-center max-w-md h-60 p-6 mx-auto rounded-md dark:bg-gray-900 dark:text-gray-100">
      {/* Logo on the far left with increased size */}
      {props.logo && (
        <div className="flex-shrink-0 mr-4">
          <img
            src={props.logo}
            alt={`${props.institution} logo`}
            className="object-contain w-24 h-24 rounded bg-white p-1" // Increased size here
          />
        </div>
      )}

      {/* Wrapper for the rest of the content */}
      <div className="flex flex-col flex-1 divide-y divide-gray-700">
        {/* Institution name */}
        <div className="p-4 pl-0">
          <h4 className="font-bold">{props.institution}</h4>
        </div>

        {/* People list */}
        <div className="p-4 pl-0 space-y-2 text-sm dark:text-gray-400">
          {props.people && props.people.map((person, indx) => (
            <ul key={indx}>
              <li>{person.name}</li>
              <p>{person.department}</p>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollabCard;
