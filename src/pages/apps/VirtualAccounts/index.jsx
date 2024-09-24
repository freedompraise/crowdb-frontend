import { useState, useEffect } from 'react'
import { fetchVirtualAccounts } from './api'
import VirtualAccountsTable from './components/VirtualAccountsTable'
import { Pagination, Alert } from 'react-bootstrap'
import { PageBreadcrumb2, Spinner } from '@/components'
import { SearchBar } from '@/layout/TopNavbar/components'

const VirtualAccountsPage = () => {
	const [virtualAccounts, setVirtualAccounts] = useState([])
	const [filteredAccounts, setFilteredAccounts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		const getVirtualAccounts = async () => {
			setLoading(true)
			setError(null)
			try {
				const data = await fetchVirtualAccounts(currentPage)
				setVirtualAccounts(data.data)
				setFilteredAccounts(data.data)
				setTotalPages(Math.ceil(data.total / data.limit))
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		getVirtualAccounts()
	}, [currentPage])

	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase()
		setSearchQuery(query)
		const filtered = virtualAccounts.filter((account) => {
			return (
				account.accountName.toLowerCase().includes(query) ||
				account.accountNumber.includes(query) ||
				account.bankName.toLowerCase().includes(query)
			)
		})
		setFilteredAccounts(filtered)
		setCurrentPage(1)
	}

	return (
		<div>
			<PageBreadcrumb2 title={'Wallets'} appName={'Customers'} />
			<SearchBar
				text="Search account name, number, or bank"
				onSearch={handleSearch}
				searchValue={searchQuery}
			/>
			{loading ? (
				<Spinner animation="border" />
			) : error ? (
				<Alert variant="danger">{error}</Alert>
			) : (
				<>
					<VirtualAccountsTable virtualAccounts={filteredAccounts} />
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
