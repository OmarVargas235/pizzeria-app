import React from 'react';
import { IsFormStyled } from '../style';

const IsForm = ({ message, showBtn, setIsForm }) => (
	<IsFormStyled className="d-flex justify-content-center align-items-center flex-column">
		<h1 className="mb-4 title container text-center">{message}.</h1>
		
		{
			!showBtn
			? null
			: <a 
				href={process.env.REACT_APP_FRONTEND_URL_URL}
				className="btn btn-info"
			>Click aqui, para ir a iniciar sesion</a>
		}
		
		{
			message === "El password es obligatorio" || message === "Los passwords son diferentes"
			? <button
				className="btn btn-info mt-4"
				onClick={() => setIsForm(true)}
			>Regresar</button> : null
		}
	</IsFormStyled>
)

export default IsForm;