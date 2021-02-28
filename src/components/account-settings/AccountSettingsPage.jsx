import React from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { AccountSettings } from './style';

const AccountSettingsPage = () => (
	<AccountSettings>
		<header className="pt-2 pl-4 mb-4">
			<Arrow style={{cursor: 'pointer'}}/> 
		</header>

		<main className="d-flex justify-content-center mb-4">
			<div className="container__iconUser d-flex justify-content-center align-items-center">
				<User />
			</div>

			<Edit />
		</main>

		<footer className="text-center">
			<h4>Pepito Perez</h4>
			<p>pperez@perez.com</p>
		</footer>
	</AccountSettings>
)

export default AccountSettingsPage;