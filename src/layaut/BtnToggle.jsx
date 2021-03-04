import React from 'react';
import { ReactComponent as Sun } from '../assets/icons/sun.svg';
import { ReactComponent as Moon } from '../assets/icons/moon.svg';

const BtnToggle = ({ isDark }) => (
	<div className="button-toggle">
		<input 
			type="checkbox"
			className="checkbox"
			id="button-toggle"
			defaultChecked={isDark}
		/>

		<label htmlFor="button-toggle" className="label">
			<Sun className="sun" />
			<Moon className="moon" />
		</label>
	</div>
)

export default React.memo(BtnToggle);