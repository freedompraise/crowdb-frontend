import AllRoutes from './routes/Routes'
import { AuthProvider, ThemeProvider } from './context'
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
					<AllRoutes />
					<Toaster richColors />
				</AuthProvider>
			</ThemeProvider>
		</>
	)
}
export default App
