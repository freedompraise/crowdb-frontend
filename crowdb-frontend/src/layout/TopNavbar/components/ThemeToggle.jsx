import { useState, useEffect } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import '@/assets/scss/ThemeToggle.scss'

const ThemeToggle = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme' || 'light'))

	useEffect(() => {
		document.body.className = theme
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<div className="theme-toggle" onClick={toggleTheme}>
			{theme === 'light' ? <BsMoon size={24} /> : <BsSun size={24} />}
		</div>
	)
}

export default ThemeToggle
