import { useState, useEffect } from 'react'
import { fetchNGNWallets, fetchUSDWallets } from './api'
import { Alert, Dropdown } from 'react-bootstrap'
import WalletsTable from './components/WalletsTable'
import { PageBreadcrumb2, Spinner } from '@/components'

const CustomerWalletsPage = () => {
	const [wallets, setWallets] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [walletType, setWalletType] = useState('NGN')

	useEffect(() => {
		const loadWallets = async () => {
			setLoading(true)
			setError(null)
			try {
				const walletsData =
					walletType === 'NGN'
						? await fetchNGNWallets()
						: await fetchUSDWallets()
				setWallets(walletsData)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		loadWallets()
	}, [walletType])

	return (
		<>
			<PageBreadcrumb2
				title="Wallets"
				links={[{ text: 'Dashboard', to: '/' }, { text: 'Wallets' }]}
			/>
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h2>{walletType} Wallets</h2>
				<Dropdown onSelect={(e) => setWalletType(e)} className="wallet-toggle">
					<Dropdown.Toggle
						variant="secondary"
						className="d-flex align-items-center">
						<i className="fas fa-wallet" style={{ marginRight: '8px' }}></i>
						{walletType}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item eventKey="NGN">NGN Wallets</Dropdown.Item>
						<Dropdown.Item eventKey="USD">USD Wallets</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			{loading ? (
				<Spinner animation="border" className="d-block mx-auto" />
			) : error ? (
				<Alert variant="danger">{error}</Alert>
			) : wallets.length > 0 ? (
				<WalletsTable wallets={wallets} setWallets={setWallets} />
			) : (
				<Alert variant="warning">No Wallets Yet on This Account</Alert>
			)}
		</>
	)
}

export default CustomerWalletsPage
