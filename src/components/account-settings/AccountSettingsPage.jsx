import React from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { AccountSettings } from './style';

const AccountSettingsPage = ({ history, themes, dataUser, changeImage, editName, img, setInProp }) => (
	<AccountSettings themes={themes} className="accountSettings-enter-exit">
		<header className="pt-2 pl-4 mb-4">
			<Arrow 
				style={{cursor: 'pointer'}}
				onClick={() => {
					setInProp(false);
					setTimeout(() => history.goBack(), 200);
				}}
			/> 
		</header>

		<main className="d-flex justify-content-center mb-4">
			<div 
				className="container__iconUser d-flex justify-content-center align-items-center changeImage"
			>
				<input 
					type="file"
					onChange={changeImage}
					name="img-user"
				/>

				{
					img === '' ? <User />
					: <img 
			    		className="img-fluid"
			    		src={`${process.env.REACT_APP_BACKEND_URL}/${img}`}
			    		alt={img}
			    	/>
				}
				
			</div>

			<Edit
				onClick={editName}
			/>
		</main>

		<footer className="d-flex justify-content-center align-items-center flex-column">
			<h3>
				<span className="text-capitalize">{dataUser.name} </span> 
				<span className="text-capitalize">{dataUser.lastName}</span></h3>
			<p>{dataUser.email}</p>
		</footer>
	</AccountSettings>
)

export default withRouter(AccountSettingsPage);