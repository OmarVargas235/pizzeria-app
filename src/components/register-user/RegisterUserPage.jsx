import React from 'react';
import GoBackArrow from '../../layaut/GoBackArrow';
import { RegisterStyle } from './style';

const RegisterUserPage = ({ handleChange, handleSubmit, desactiveBtn, themes, history }) => (
	<RegisterStyle 
		className="background-white d-flex justify-content-center align-items-center flex-column pt-0 pt-md-4"
		themes={themes}
	>
		<GoBackArrow 
			history={history}
			desactiveBtn={desactiveBtn}
			themes={themes}
		/>

		<h3 className="mb-4">Formulario de Registro</h3>

		<form className="p-4" onSubmit={handleSubmit}>
			<div className="form-group">
				<input 
					type="text" 
					className="form-control" 
					placeholder="Nombre"
					name="name"
					autoComplete="off"
					onChange={handleChange}
				/>
			</div>

			<div className="form-group">
				<input 
					type="text" 
					className="form-control" 
					placeholder="Apellido"
					name="lastName"
					autoComplete="off"
					onChange={handleChange}
				/>
			</div>

			<div className="form-group">
				<input 
					type="email" 
					className="form-control" 
					placeholder="Email"
					name="email"
					onChange={handleChange}
				/>
			</div>

			<div className="form-group">
				<input 
					type="password" 
					className="form-control" 
					placeholder="Contraseña"
					name="password"
					autoComplete="off"
					onChange={handleChange}
				/>
			</div>

			<div className="form-group">
				<input 
					type="password" 
					className="form-control" 
					placeholder="Repetir contraseña"
					name="repeatPassword"
					autoComplete="off"
					onChange={handleChange}
				/>
			</div>

			<input 
				type="submit" 
				className="btn btn-warning btn-block" 
				value="Crear Cuenta"
				disabled={desactiveBtn}
			/>
		</form>
	</RegisterStyle>
)

export default RegisterUserPage;