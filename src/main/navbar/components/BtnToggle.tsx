// 1.- librerias
import React from 'react';

// 2.- components
import { BtnToggleStyles } from '../styled';

// 3.- iconos
import { ReactComponent as Sun } from '../../../assets/icons/sun.svg';
import { ReactComponent as Moon } from '../../../assets/icons/moon.svg';

const BtnToggle = (): JSX.Element => (
	<BtnToggleStyles>
		<input 
			type="checkbox"
			className="checkbox"
			id="button-toggle"
			defaultChecked={false}
		/>

		<label htmlFor="button-toggle" className="label">
			<Sun className="sun" />
			<Moon className="moon" />
		</label>
	</BtnToggleStyles>
)

export default React.memo(BtnToggle);