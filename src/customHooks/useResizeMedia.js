import React, { useState, useEffect } from 'react';

export const useResizeMedia = (width) => {

	const [maxWidth, setMaxWidth] = useState(window.matchMedia(`(max-width: ${width}px)`).matches);

	useEffect(() => {
		
		function resizeMedia() {
			
			setMaxWidth(window.matchMedia(`(max-width: ${width}px)`).matches);
		}
		
		window.addEventListener('resize', resizeMedia);

		return () => window.removeEventListener('resize', resizeMedia);

	}, [maxWidth]);
	
	return [ maxWidth ];
}