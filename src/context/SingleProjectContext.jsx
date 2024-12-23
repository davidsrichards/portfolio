import { useState, createContext } from 'react';


const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {


	return (
		<SingleProjectContext.Provider

		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
