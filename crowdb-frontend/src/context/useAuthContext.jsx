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

const authSessionKey = '_CROWDB_AUTH_'
export function AuthProvider({ children }) {
	const [user, setUser] = useState(undefined)
	const saveSession = (user) => {
		setCookie(authSessionKey, JSON.stringify(user))
		localStorage.setItem('token', user.token)
		setUser(user)
	}
	const removeSession = () => {
		deleteCookie(authSessionKey)
		setUser(undefined)
		localStorage.removeItem('token')
	}
	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: hasCookie(authSessionKey),
				saveSession,
				removeSession,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
