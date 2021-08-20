import React from 'react';

import { FormChangePasswordPageStyle } from '../style';

const FormChangePasswordPage = ({ changePassword, setPassword, setRepeatPassword }) => (
	<FormChangePasswordPageStyle className="d-flex justify-content-center align-items-center flex-column">

		 <h3 className="mb-5 title">Cambia tu contraseña aqui</h3>

		<form className="p-4 border rounded" onSubmit={changePassword}>
			<div className="input-group mb-3 d-flex align-items-center">
				<input 
					type="password"
					className="form-control"
					placeholder="password"
					name="password"
					onChange={e => setPassword(e.target.value)}
				/>
		    </div>

		    <div className="input-group mb-3 d-flex align-items-center">
				<input 
					type="password"
					className="form-control"
					placeholder="repetir password"
					name="repeatPassword"
					onChange={e => setRepeatPassword(e.target.value)}
				/>
		    </div>

		    <input 
		    	type="submit"
		    	value="Solicitar nueva contraseña"
		    	className="btn btn-block"
		    />
		</form>
	</FormChangePasswordPageStyle>
)

export default FormChangePasswordPage;