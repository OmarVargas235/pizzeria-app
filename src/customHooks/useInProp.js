import { useState, useEffect } from 'react';

// Hook para las animaciones de los componentes
export const useInProp = () => {
	
	const [inProp, setInProp] = useState(false);

	useEffect(() => {
		
		let timeout = setTimeout(() => setInProp(true), 0);

		return () => {
			
			setInProp(false);
			clearTimeout(timeout);
		}

	}, []);

	return [inProp, setInProp];
}