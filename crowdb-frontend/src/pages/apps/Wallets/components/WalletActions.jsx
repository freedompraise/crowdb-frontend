import { useState, useEffect } from 'react'
import { lockWallet, unlockWallet } from '../api'
import { Button, Spinner, Dropdown, Modal, Form, Alert } from 'react-bootstrap'

const WalletActions = ({ wallet, onUpdate }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [error, setError] = useState(null)
	const [action, setAction] = useState(null)

	useEffect(() => {
		setError(null)
	}, [showModal])

	const handleAction = async () => {
		setIsLoading(true)
		try {
			if (action === 'lock') {
				await lockWallet(wallet.id)
				onUpdate({ ...wallet, isLocked: true })
			} else {
				await unlockWallet(wallet.id)
				onUpdate({ ...wallet, isLocked: false })
			}
			setShowModal(false)
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<Dropdown>
				<Dropdown.Toggle variant="light" id="dropdown-basic">
					<span className="las la-pen text-secondary fs-5" />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item onClick={() => setAction('lock')}>Lock</Dropdown.Item>
					<Dropdown.Item onClick={() => setAction('unlock')}>
						Unlock
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Action</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{error && <Alert variant="danger">{error}</Alert>}
					{`Are you sure you want to ${action} this wallet?`}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowModal(false)}>
						Cancel
					</Button>
					<Button variant="primary" onClick={handleAction}>
						{isLoading ? <Spinner animation="border" size="sm" /> : 'Confirm'}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default WalletActions
