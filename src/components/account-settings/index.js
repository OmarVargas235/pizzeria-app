import React, { useEffect, useContext } from 'react';
import AccountSettingsPage from './AccountSettingsPage';
import { ContextTheme } from '../../context/ContextTheme';

const AccountSettings = ({ match:{path}, setPath }) => {
	
	const { themes } = useContext( ContextTheme );

	useEffect(() => setPath(path), [path, setPath]);

	return (
		<AccountSettingsPage themes={themes} />	
	)
}

export default AccountSettings;