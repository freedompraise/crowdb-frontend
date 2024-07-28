import { Table } from 'react-bootstrap'

const TransactionTable = ({ transactions }) => {
	localStorage.setItem('transactions', JSON.stringify(transactions))
	return (
		<div className="table-responsive">
			<Table bordered striped responsive>
				<thead>
					<tr>
						<th>Transaction ID</th>
						<th>Date of Transaction</th>
						<th>Slots</th>
						<th>Package</th>
						<th>User</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction, idx) => (
						<tr key={idx}>
							<td>{transaction.id}</td>
							<td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
							<td>{transaction.slots}</td>
							<td>{transaction.package.name}</td>
							<td>
								{transaction.user.firstName} {transaction.user.lastName}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	)
}

export default TransactionTable
