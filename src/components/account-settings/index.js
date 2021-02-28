import React, { useEffect } from 'react';
import AccountSettingsPage from './AccountSettingsPage';

const AccountSettings = ({ match:{path}, setPath }) => {
	
	useEffect(() => setPath(path), [path, setPath]);

	return (
		<AccountSettingsPage />	
	)
}

export default AccountSettings;