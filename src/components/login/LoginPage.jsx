import React from 'react';
import logo from '../../assets/img/logo.png';
import user from '../../assets/img/ic_usuario.png';
import password from '../../assets/img/ic_password.png';
import { LoginContainer } from './style';

const LoginPage = ({ history, handleChange, handleClick }) => (
	
	<LoginContainer className="background-white px-5 d-flex flex-column justify-content-center align-items-center h-100">
		<img src={logo} alt="logo" />
		<h3 className="welcome font-weight-bold mb-2">Bienvenido</h3>
		<p className="mb-2 mb-md-4">A las mejores pizzas del pais</p>

		<form className="mb-2 mb-md-4">
			<div className="input-group mb-3 d-flex align-items-center">
				<input 
					type="email"
					className="form-control"
					placeholder="Usuario (email)"
					name="email"
					onChange={handleChange}
				/>

				<img src={user} alt="user" className="img-fluid icon mr-4" />
		    </div>

			<div className="input-group d-flex align-items-center">
			    <input 
			    	type="password"
			    	className="form-control"
			    	placeholder="Contraseña"
			    	name="password"
			    	onChange={handleChange}
			    />

			    <img src={password} alt="password" className="img-fluid icon mr-4" />
			</div>
		</form>

		<p 
			className="font-weight-bold btn border-0 p-0 mb-2 text-dark"
			onClick={() => history.push('/register-user')}
		>Crear Cuenta</p>
		<p className="font-weight-bold btn border-0 p-0 text-dark">¿Olvidaste tu contraseña?</p>

		<button 
			onClick={handleClick}
			className="btn btn-warning"
		>Iniciar Sesion</button>
	</LoginContainer>	
)

export default LoginPage;