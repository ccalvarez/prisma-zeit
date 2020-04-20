// React
import React from 'react'
import { render } from 'react-dom'
// Packages
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
// Components
import App from './App'

// GraphQL
const client = new ApolloClient({
	request: async operation => {
		const token = window.localStorage.getItem('token')
		operation.setContext({ headers: { Authorization: token ? `Bearer ${token}` : '' } })
	},
	uri: '../api'
})

console.log(client)
// App
render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.querySelector('demoapp')
)

console.log('Welcome!')
