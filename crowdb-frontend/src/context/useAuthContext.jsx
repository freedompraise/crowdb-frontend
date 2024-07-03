import { deleteCookie, hasCookie, setCookie } from 'cookies-next'
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(undefined)
export function useAuthContext() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuthContext must be used within an AuthProvider')
	}
	return context
}

const authTokenKey = 'CROWDB_AUTH_TOKEN'
export function AuthProvider({ children }) {
	const [user, setUser] = useState(undefined)
	const saveSession = (user) => {
		setCookie(authTokenKey, JSON.stringify(user))
		localStorage.setItem('token', user.token)
		setUser(user)
	}
	const removeSession = () => {
		deleteCookie(authTokenKey)
		setUser(undefined)
		localStorage.removeItem('token')
	}
	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: hasCookie(authTokenKey),
				saveSession,
				removeSession,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
