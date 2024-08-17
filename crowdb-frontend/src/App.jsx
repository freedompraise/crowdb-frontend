import AllRoutes from './routes/Routes'
import { AuthProvider, ThemeProvider } from './context'
import ErrorBoundary from './components/ErrorBoundary'
import { Toaster } from 'sonner'
import '@/assets/scss/app.scss'
import '@/assets/scss/icons.scss'
import '@/assets/scss/ThemeToggle.scss'
// import '@/assets/scss/_variables-dark.scss'

function App() {
	return (
		<>
			<ThemeProvider>
				<AuthProvider>
					{/* <ErrorBoundary> */}
					<AllRoutes />
					<Toaster richColors />
					{/* </ErrorBoundary> */}
				</AuthProvider>
			</ThemeProvider>
		</>
	)
}
export default App
