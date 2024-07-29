import { useState, useEffect } from 'react'
import { fetchWallets } from './api'
import { Container, Row, Col, Table, Spinner, Alert } from 'react-bootstrap'
import WalletsTable from './components/WalletsTable'

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
		<Container>
			<Row className="justify-content-center">
				<Col xs={12} md={10} lg={8}>
					<h1 className="text-center my-4">Customer Wallets</h1>
					{loading ? (
						<Spinner animation="border" className="d-block mx-auto" />
					) : error ? (
						<Alert variant="danger">{error}</Alert>
					) : (
						<WalletsTable wallets={wallets} />
					)}
				</Col>
			</Row>
		</Container>
	)
}

export default CustomerWalletsPage
