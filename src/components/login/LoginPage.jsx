import React from 'react';
import logo from '../../assets/img/logo.png';
import user from '../../assets/img/ic_usuario.png';
import password from '../../assets/img/ic_password.png';
import { LoginContainer, DisableText } from './style';

const LoginPage = ({ history, handleChange, handleClick, desactiveBtn, isDark }) => (
	
	<LoginContainer className="background-white px-5 d-flex flex-column justify-content-center align-items-center">
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
	
		<DisableText
			className={`font-weight-bold border-0 p-0 mb-2 ${isDark ? 'text-light' : 'text-dark'}`}
			desactiveBtn={desactiveBtn}
			onClick={() => !desactiveBtn && history.push('/registrar-usuario')}
		>Crear Cuenta</DisableText>
		<DisableText
			className={`font-weight-bold border-0 p-0 mb-2 ${isDark ? 'text-light' : 'text-dark'}`}
			desactiveBtn={desactiveBtn}
			onClick={() => !desactiveBtn && history.push('/cambiar-contraseña')}
		>¿Olvidaste tu contraseña?</DisableText>

		<button 
			onClick={handleClick}
			className="btn btn-warning"
			disabled={desactiveBtn}
		>Iniciar Sesion</button>
	</LoginContainer>	
)

export default LoginPage;