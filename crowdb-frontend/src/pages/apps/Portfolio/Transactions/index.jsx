import React, { useEffect, useState } from 'react'
import { Table, Container, Row, Col, Card, Alert } from 'react-bootstrap'
import { fetchPortfolioTransactions } from './api'
import { PageBreadcrumb2, Spinner } from '@/components'

const PortfolioTransactions = () => {
	const [transactions, setTransactions] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getTransactions = async () => {
			try {
				const data = await fetchPortfolioTransactions()
				setTransactions(data.data)
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
		<Container>
			<Row>
				<Col>
					<Card>
						<Card.Header>
							<PageBreadcrumb2 page="Transactions" />
						</Card.Header>
						<Card.Body>
							<h4>Transaction History</h4>
							<Table bordered hover>
								<thead>
									<tr>
										<th>ID</th>
										<th>Created At</th>
										<th>Updated At</th>
										<th>Slots</th>
										<th>Package</th>
										<th>User</th>
									</tr>
								</thead>
								<tbody>
									{transactions.length > 0 ? (
										transactions.map((transaction) => (
											<tr key={transaction.id}>
												<td>{transaction.id}</td>
												<td>
													{new Date(transaction.createdAt).toLocaleString()}
												</td>
												<td>
													{new Date(transaction.updatedAt).toLocaleString()}
												</td>
												<td>{transaction.slots}</td>
												<td>{transaction.package.name}</td>
												<td>{`${transaction.user.firstName} ${transaction.user.lastName}`}</td>
											</tr>
										))
									) : (
										<tr>
											<td colSpan="6" className="text-center">
												No transactions found
											</td>
										</tr>
									)}
								</tbody>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default PortfolioTransactions
