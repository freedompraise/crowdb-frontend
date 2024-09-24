import { Suspense } from 'react'

// utils

const loading = () => <div />
const DefaultLayout = ({ children }) => {
	return <Suspense fallback={loading()}>{children}</Suspense>
}
export default DefaultLayout
