import { useState, useEffect } from 'react'
import { fetchVirtualAccounts } from './api'
import VirtualAccountsTable from './components/VirtualAccountsTable'
import { Pagination } from 'react-bootstrap'
import { PageBreadcrumb2, Spinner } from '@/components'
import { Alert } from 'react-bootstrap'

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
			<PageBreadcrumb2 title={'Wallets'} appName={'Customers'} />
			{loading ? (
				<Spinner animation="border" />
			) : error ? (
				<Alert variant="danger">{error}</Alert>
			) : (
				<>
					<VirtualAccountsTable virtualAccounts={virtualAccounts} />
					<Pagination>
						<Pagination.Prev
							disabled={currentPage === 1}
							onClick={() => setCurrentPage((prev) => prev - 1)}
						/>
						<Pagination.Item active>{currentPage}</Pagination.Item>
						<Pagination.Next
							disabled={currentPage === totalPages}
							onClick={() => setCurrentPage((prev) => prev + 1)}
						/>
					</Pagination>
				</>
			)}
		</div>
	)
}

export default VirtualAccountsPage
