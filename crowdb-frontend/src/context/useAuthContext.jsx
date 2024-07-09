import { deleteCookie, hasCookie, setCookie } from 'cookies-next'
import { createContext, useContext, useState, useEffect } from 'react'

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
	const [user, setUser] = useState(() => {
		if (hasCookie(authTokenKey)) {
			try {
				const token = localStorage.getItem('token')
				return token ? { token } : undefined
			} catch (error) {
				console.error('Failed to parse token from localStorage', error)
				return undefined
			}
		}
		return undefined
	})

	useEffect(() => {
		if (hasCookie(authTokenKey)) {
			try {
				const token = localStorage.getItem('token')
				setUser(token ? { token } : undefined)
			} catch (error) {
				console.error('Failed to parse token from localStorage', error)
				setUser(undefined)
			}
		}
	}, [])

	const saveSession = (user) => {
		try {
			setCookie(authTokenKey, JSON.stringify(user))
			localStorage.setItem('token', user.token)
			setUser(user)
		} catch (error) {
			console.error('Failed to save session', error)
		}
	}

	const removeSession = () => {
		deleteCookie(authTokenKey)
		localStorage.removeItem('token')
		setUser(undefined)
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: !!user,
				saveSession,
				removeSession,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
