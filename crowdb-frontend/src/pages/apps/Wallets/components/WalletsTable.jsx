import { Table } from 'react-bootstrap'
import WalletActions from './WalletActions'

const WalletsTable = ({ wallets, setWallets }) => {
	const handleWalletUpdate = (updatedWallett) => {
		const updatedWallets = wallets.map((wallet) =>
			wallet.id === updatedWallett.id ? updatedWallett : wallet
		)
		setWallets(updatedWallets)
	}

	return (
		<Table striped bordered hover responsive>
			<thead>
				<tr>
					<th>ID</th>
					<th>Balance</th>
					<th>Previous Balance</th>
					<th>Status</th>
					<th>Date Created</th>
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
						<td>
							{wallet.isLocked ? (
								<span className="text-primary">Locked</span>
							) : (
								<span className="text-muted">Unlocked</span>
							)}
						</td>
						<td>{new Date(wallet.createdAt).toLocaleDateString()}</td>
						<td className="text-uppercase">{wallet.currency}</td>
						<td>{`${wallet.user.firstName} ${wallet.user.lastName}`}</td>
						<td>
							<WalletActions wallet={wallet} onUpdate={handleWalletUpdate} />
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default WalletsTable
