import { useState, useEffect } from 'react'
import { fetchWallets } from './api'
import { Alert } from 'react-bootstrap'
import WalletsTable from './components/WalletsTable'
import { PageBreadcrumb2, Spinner } from '@/components'

const CustomerWalletsPage = () => {
	const [wallets, setWallets] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		const loadWallets = async () => {
			setLoading(true)
			try {
				const walletsData = await fetchWallets()
				setWallets(walletsData)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		loadWallets()
	}, [])

	return (
		<>
			<PageBreadcrumb2
				title="Wallets"
				links={[{ text: 'Dashboard', to: '/' }, { text: 'Wallets' }]}
			/>
			<>
				{loading ? (
					<Spinner animation="border" className="d-block mx-auto" />
				) : error ? (
					<Alert variant="danger">{error}</Alert>
				) : (
					<WalletsTable wallets={wallets} setWallets={setWallets} />
				)}
			</>
		</>
	)
}

export default CustomerWalletsPage
