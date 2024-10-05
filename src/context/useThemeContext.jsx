import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(undefined)

export function useThemeContext() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useThemeContext must be used within a ThemeProvider')
	}
	return context
}

// ThemeProvider component
export function ThemeProvider({ children }) {
	const INIT_STATE = {
		sideNavMode: 'default',
	}
	const [settings, setSettings] = useState(INIT_STATE)
	const updateSettings = (_newSettings) => {
		setSettings({
			...settings,
			..._newSettings,
		})
	}
	const updateSideNavMode = (newSideNavMode) => {
		if (newSideNavMode === 'default') {
			document.body.classList.contains('enlarge-menu') &&
				document.body.classList.remove('enlarge-menu')
		} else if (newSideNavMode === 'sm') {
			!document.body.classList.contains('enlarge-menu') &&
				document.body.classList.add('enlarge-menu')
		}
		updateSettings({
			...settings,
			sideNavMode: newSideNavMode,
		})
	}
	return (
		<ThemeContext.Provider
			value={{
				updateSideNavMode,
				settings,
			}}>
			{children}
		</ThemeContext.Provider>
	)
}
