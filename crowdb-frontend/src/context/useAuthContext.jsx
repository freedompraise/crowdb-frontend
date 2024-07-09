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
			const cookieUser = JSON.parse(localStorage.getItem('token'))
			return cookieUser ? { token: cookieUser } : undefined
		}
		return undefined
	})

	useEffect(() => {
		if (hasCookie(authTokenKey)) {
			const cookieUser = JSON.parse(localStorage.getItem('token'))
			setUser(cookieUser)
		}
	}, [])

	const saveSession = (user) => {
		setCookie(authTokenKey, JSON.stringify(user))
		localStorage.setItem('token', user.token)
		setUser(user)
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
