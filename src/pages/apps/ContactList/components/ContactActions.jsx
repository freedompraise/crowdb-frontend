import { useState, useEffect } from 'react'
import { Dropdown, Modal, Button, Form } from 'react-bootstrap'
import { toggleUserStatus, updateUserName } from '../api'
import { toast } from 'sonner'
import { SuccessToast } from '@/components'

const ContactActions = ({ contact, updateContact }) => {
	const [showModal, setShowModal] = useState(false)
	const [newName, setNewName] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (contact) {
			setNewName(`${contact.firstName} ${contact.lastName}`)
		}
	}, [contact])

	const handleToggleStatus = async () => {
		const updatedContact = {
			...contact,
			isActive: !contact.isActive,
			isLoading: true,
		}
		updateContact(updatedContact)

		try {
			const result = await toggleUserStatus(contact.id, !contact.isActive)
			if (result.success) {
				updateContact({ ...updatedContact, isLoading: false })
			} else {
				throw new Error(result.message)
			}
		} catch (error) {
			updateContact({
				...contact,
				isActive: contact.isActive,
				isLoading: false,
			})
			toast.error(error.message)
		}
	}

	const handleUpdateName = () => {
		setShowModal(true)
	}

	const handleNameChange = (e) => {
		setNewName(e.target.value)
	}

	const handleSaveName = async () => {
		setLoading(true)
		try {
			const result = await updateUserName(contact.id, newName)
			if (result.success) {
				const updatedContact = {
					...contact,
					firstName: newName.split(' ')[0],
					lastName: newName.split(' ')[1],
				}
				updateContact(updatedContact)
				SuccessToast('Name updated successfully')
			} else {
				throw new Error(result.message)
			}
		} catch (error) {
			toast.error(error.message)
		}
		setLoading(false)
		setShowModal(false)
	}

	return (
		<>
			<Dropdown>
				<Dropdown.Toggle variant="dark" id="dropdown-basic">
					<span className="las la-pen text-secondary fs-5"></span>
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item
						href="#"
						onClick={handleToggleStatus}
						disabled={contact.isLoading}>
						{contact.isActive ? 'Deactivate' : 'Activate'}
					</Dropdown.Item>
					<Dropdown.Item href="#" onClick={handleUpdateName}>
						Update Name
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Update User Name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>New Name</Form.Label>
							<Form.Control
								type="text"
								value={newName}
								onChange={handleNameChange}
								placeholder="Enter new name"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowModal(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSaveName} disabled={loading}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default ContactActions
