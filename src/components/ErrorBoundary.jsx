import { Component } from 'react'
import { toast } from 'sonner'

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false, toastDisplayed: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error, errorInfo) {
		console.error('ErrorBoundary caught an error', error, errorInfo)

		if (!this.state.toastDisplayed) {
			this.setState({ toastDisplayed: true })
			toast.error('An error occurred. Please try refreshing the page.')
		}
	}

	render() {
		if (this.state.hasError) {
			// Fallback UI
			return <h1>Something went wrong. Please try again later.</h1>
		}

		return this.props.children
	}
}

export default ErrorBoundary
