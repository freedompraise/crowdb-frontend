import AllRoutes from './routes/Routes'
import { AuthProvider, ThemeProvider } from './context'
import configureFakeBackend from './common/api/fake-backend'
import { Toaster } from 'sonner'
import '@/assets/scss/app.scss'
import '@/assets/scss/icons.scss'
import '@/assets/scss/ThemeToggle.scss'
// import '@/assets/scss/_variables-dark.scss'

function App() {
	configureFakeBackend()
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
