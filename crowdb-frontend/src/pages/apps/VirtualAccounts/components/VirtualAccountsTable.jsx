import { Table } from 'react-bootstrap'

const VirtualAccountsTable = ({ virtualAccounts }) => {
	return (
		<Table bordered hover>
			<thead>
				<tr>
					<th>ID</th>
					<th>Account Name</th>
					<th>Account Number</th>
					<th>Bank Name</th>
					<th>Is Active</th>
					<th>Currency</th>
					<th>Created At</th>
					<th>Updated At</th>
				</tr>
			</thead>
			<tbody>
				{virtualAccounts.length > 0 ? (
					virtualAccounts.map((account) => (
						<tr key={account.id}>
							<td>{account.id}</td>
							<td>{account.accountName}</td>
							<td>{account.accountNumber}</td>
							<td>{account.bankName}</td>
							<td>{account.isActive ? 'Yes' : 'No'}</td>
							<td>{account.currency}</td>
							<td>{new Date(account.createdAt).toLocaleString()}</td>
							<td>{new Date(account.updatedAt).toLocaleString()}</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan="8" className="text-center">
							No virtual accounts found
						</td>
					</tr>
				)}
			</tbody>
		</Table>
	)
}

export default VirtualAccountsTable
