import { useState, useEffect } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import '@/assets/scss/ThemeToggle.scss'

const ThemeToggle = () => {
	const storedTheme = localStorage.getItem('theme') || 'light'
	const [theme, setTheme] = useState(storedTheme)

	useEffect(() => {
		document.body.classList.toggle('dark-mode', theme === 'dark')
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
