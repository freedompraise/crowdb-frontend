import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { fetchPortfolioTransactions } from './api'
import { PageBreadcrumb2, Spinner } from '@/components'
import TransactionTable from './components/TransactionTable'

const PortfolioTransactions = () => {
	const [transactions, setTransactions] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getTransactions = async () => {
			try {
				const result = await fetchPortfolioTransactions()
				setTransactions(result)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		getTransactions()
	}, [])

	if (loading) {
		return <Spinner animation="border" />
	}

	if (error) {
		return <Alert variant="danger">{error}</Alert>
	}

	return (
		<>
			<PageBreadcrumb2 title="Transactions" appName="Portfolio" />
			<TransactionTable transactions={transactions} />
		</>
	)
}

export default PortfolioTransactions
