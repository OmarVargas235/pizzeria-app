import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuStyles, BtnToggleStyles } from '../style';
import BtnToggle from '../../../layaut/BtnToggle';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
import { ReactComponent as CloseSesion } from '../../../assets/icons/closeSesion.svg';
import { ReactComponent as Config } from '../../../assets/icons/config.svg';

const MenuPage = ({ history, desactiveMenuAndAnimation, activeAnimation, logout, themes, isDark, changeTheme, dataUser, img }) => (

	<MenuStyles 
		className="row" 
		activeAnimation={activeAnimation} 
		themes={themes}
	>

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
				{
					img === '' ? <UserIcon />
					: <img 
			    		className="img-fluid"
			    		src={`${process.env.REACT_APP_BACKEND_URL}/${img}`}
			    		alt={img}
			    	/>
				}
			</div>

			<p className="px-3">
				Bienvenido 
				<span className="text-capitalize"> {dataUser.name} </span>
				<span className="text-capitalize">{dataUser.lastName}</span>
			</p>
		
			<div 
				className="option p-3 d-flex align-items-center"
				onClick={ logout }
			>
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

			<BtnToggleStyles 
				className="p-3"
				onClick={changeTheme}
			>
				<BtnToggle
					isDark={isDark}
				/>
			</BtnToggleStyles>
		</div>
	</MenuStyles>
)

export default withRouter(MenuPage);