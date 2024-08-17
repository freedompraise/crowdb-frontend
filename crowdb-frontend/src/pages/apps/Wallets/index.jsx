import { useState, useEffect } from 'react'
import { fetchNGNWallets, fetchUSDWallets } from './api'
import { Alert, Dropdown } from 'react-bootstrap'
import WalletsTable from './components/WalletsTable'
import { PageBreadcrumb2, Spinner } from '@/components'
import { SearchBar } from '@/layout/TopNavbar/components'

const CustomerWalletsPage = () => {
	const [wallets, setWallets] = useState([])
	const [filteredWallets, setFilteredWallets] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [walletType, setWalletType] = useState('NGN')
	const [searchQuery, setSearchQuery] = useState('')

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
				setFilteredWallets(walletsData)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		loadWallets()
	}, [walletType])

	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase()
		setSearchQuery(query)
		const filtered = wallets.filter((wallet) => {
			const user = wallet.user
			return (
				user.firstName.toLowerCase().includes(query) ||
				user.lastName.toLowerCase().includes(query) ||
				user.email.toLowerCase().includes(query)
			)
		})
		setFilteredWallets(filtered)
	}

	return (
		<>
			<PageBreadcrumb2
				title="Wallets"
				links={[{ text: 'Dashboard', to: '/' }, { text: 'Wallets' }]}
			/>
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h2>{walletType} Wallets</h2>
				{/* Wallet type dropdown */}
				{/* <Dropdown onSelect={(e) => setWalletType(e)} className="wallet-toggle">
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
        </Dropdown> */}
			</div>

			{/* Search Bar */}
			<SearchBar
				text="Search by name or email"
				onSearch={handleSearch}
				searchValue={searchQuery}
			/>

			{loading ? (
				<Spinner animation="border" className="d-block mx-auto" />
			) : error ? (
				<Alert variant="danger">{error}</Alert>
			) : filteredWallets.length > 0 ? (
				<WalletsTable wallets={filteredWallets} setWallets={setWallets} />
			) : (
				<Alert variant="warning">No Wallets Found</Alert>
			)}
		</>
	)
}

export default CustomerWalletsPage
