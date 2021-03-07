import React from 'react';
import logo from '../../assets/img/logo.png';
import { ChangePasswordContainer } from './style';
import GoBackArrow from '../../layaut/GoBackArrow';

const ChangePasswordPage = ({ history, handleChange, handleSumit, desactiveBtn, themes }) => {
	
	return (
		<ChangePasswordContainer className="background-white d-flex flex-column justify-content-center align-items-center">
			<GoBackArrow 
				history={history}
				desactiveBtn={desactiveBtn}
				themes={themes}
			/>

			<img src={logo} alt="logo" className="img-fluid mb-4" />
			
			<form className="mb-md-4" onSubmit={handleSumit}>
				<div className="input-group mb-3 d-flex align-items-center">
					<input 
						type="email"
						className="form-control"
						placeholder="Usuario (email)"
						name="email"
						onChange={handleChange}
					/>
			    </div>

			    <input 
			    	type="submit"
			    	value="Solicitar nueva contraseña"
			    	className="btn btn-warning"
			    	disabled={desactiveBtn}
			    />
			</form>
		</ChangePasswordContainer>
	)
}

export default ChangePasswordPage;