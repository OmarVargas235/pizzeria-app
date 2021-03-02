import React from 'react';
import logo from '../../assets/img/logo.png';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ChangePasswordContainer } from './style';
import { GoBack } from '../register-user/style';

const ChangePasswordPage = ({ history, handleChange, handleSumit, desactiveBtn, themes }) => {
	
	return (
		<ChangePasswordContainer className="background-white d-flex flex-column justify-content-center align-items-center">
			<div className="w-100 pr-5 mb-5 mb-sm-2 mb-md-4 d-flex justify-content-end align-items-center">
				<GoBack
					onClick={() => !desactiveBtn && history.push('/iniciar-sesion')}
					desactiveBtn={desactiveBtn}
					themes={themes}
				>
					<Arrow />
					<span className="goBack">Volver</span>
				</GoBack>
			</div>

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