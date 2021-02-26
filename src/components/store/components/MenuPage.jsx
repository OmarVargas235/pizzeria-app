import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from '../style';
import {ReactComponent as UserIcon} from '../../../assets/icons/user.svg';
import {ReactComponent as CloseSesion} from '../../../assets/icons/closeSesion.svg';
import {ReactComponent as Config} from '../../../assets/icons/config.svg';

const MenuPage = ({ desactiveMenuAndAnimation, activeAnimation, history }) => (

	<Menu className="row" activeAnimation={activeAnimation}>
		
		<div className='background-dark'></div>
		
		<div 
			className='col-5 col-sm-8 col-md-6 col-lg-7'
			onClick={ desactiveMenuAndAnimation }
		>
		</div>
		
		<div className='col-7 col-sm-4 col-md-6 col-lg-5 px-0 pt-5 col-right'>
			<div 
				className="container__iconUser d-flex justify-content-center align-items-center mb-4 mx-3"
			>
				<UserIcon />
			</div>
		
			<p className="px-3">Bienvenido Pepito Perez</p>
		
			<div className="option p-3 d-flex align-items-center">
				<CloseSesion />
				<span className="ml-2 font-weight-bold">Cerrar Sesion</span>
			</div>
		
			<div 
				className="option p-3 d-flex align-items-center"
				onClick={() => history.push('/account-settings')}
			>
				<Config />
				<span className="ml-2 font-weight-bold">Cuenta</span>
			</div>
		</div>
	</Menu>
)

export default withRouter(MenuPage);