import React, { createContext } from 'react';

const AuthContext = createContext('');

export const withAuth = Component => props => (
	<AuthContext.Consumer>
		{value => <Component {... props} auth={value} />}
	</AuthContext.Consumer>
);

export default AuthContext;
