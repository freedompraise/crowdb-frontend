import { Table } from 'react-bootstrap'
import WalletActions from './WalletActions'

const WalletsTable = ({ wallets }) => {
	return (
		<Table striped bordered hover responsive>
			<thead>
				<tr>
					<th>ID</th>
					<th>Balance</th>
					<th>Previous Balance</th>
					<th>Is Locked</th>
					<th>Created At</th>
					<th>Updated At</th>
					<th>Currency</th>
					<th>User</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{wallets.map((wallet) => (
					<tr key={wallet.id}>
						<td>{wallet.id}</td>
						<td>{wallet.balance}</td>
						<td>{wallet.prevBalance}</td>
						<td>{wallet.isLocked ? 'Locked' : 'Unlocked'}</td>
						<td>{new Date(wallet.createdAt).toLocaleString()}</td>
						<td>{new Date(wallet.updatedAt).toLocaleString()}</td>
						<td>{wallet.currency}</td>
						<td>{`${wallet.user.firstName} ${wallet.user.lastName}`}</td>
						<td>
							<WalletActions wallet={wallet} />
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default WalletsTable
