import { useState } from 'react'
import { lockWallet, unlockWallet } from '../api'
import { Button, Spinner, ButtonGroup } from 'react-bootstrap'

const WalletActions = ({ wallet }) => {
	const [isLoading, setIsLoading] = useState(false)

	const handleLockUnlock = async (action) => {
		setIsLoading(true)
		try {
			if (action === 'lock') {
				await lockWallet(wallet.id)
			} else {
				await unlockWallet(wallet.id)
			}
		} catch (error) {
			console.error(`Error ${action}ing wallet:`, error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<ButtonGroup>
			{isLoading ? (
				<Spinner animation="border" size="sm" />
			) : (
				<>
					<Button variant="danger" onClick={() => handleLockUnlock('lock')}>
						Lock
					</Button>
					<Button variant="success" onClick={() => handleLockUnlock('unlock')}>
						Unlock
					</Button>
				</>
			)}
		</ButtonGroup>
	)
}

export default WalletActions
