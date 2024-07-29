import { useState, useEffect } from 'react'
import { fetchVirtualAccounts } from './api'
import VirtualAccountsTable from './components/VirtualAccountsTable'
import Pagination from './components/Pagination'
import { Spinner, Alert } from 'react-bootstrap'

const VirtualAccountsPage = () => {
	const [virtualAccounts, setVirtualAccounts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)

	useEffect(() => {
		const getVirtualAccounts = async () => {
			setLoading(true)
			setError(null)
			try {
				const data = await fetchVirtualAccounts(currentPage)
				setVirtualAccounts(data.data)
				setTotalPages(Math.ceil(data.total / data.limit))
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		getVirtualAccounts()
	}, [currentPage])

	return (
		<div>
			<h1>Virtual Accounts</h1>
			{loading ? (
				<Spinner animation="border" />
			) : error ? (
				<Alert variant="danger">{error}</Alert>
			) : (
				<>
					<VirtualAccountsTable virtualAccounts={virtualAccounts} />
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={(page) => setCurrentPage(page)}
					/>
				</>
			)}
		</div>
	)
}

export default VirtualAccountsPage
