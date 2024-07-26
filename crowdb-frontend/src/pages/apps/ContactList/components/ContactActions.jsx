import { useState } from 'react'
import { Dropdown, Modal, Button, Form } from 'react-bootstrap'
import { toggleUserStatus, updateUserName } from '../api'
import { toast } from 'sonner'
import { SuccessToast } from '@/components'

const ContactActions = ({ contact, setContacts, contacts }) => {
	const [showModal, setShowModal] = useState(false)
	const [selectedContact, setSelectedContact] = useState(null)
	const [newName, setNewName] = useState('')
	const [loading, setLoading] = useState(false)

	const handleToggleStatus = async () => {
		const updatedContacts = contacts.map((c) =>
			c.id === contact.id ? { ...c, isActive: !c.isActive, isLoading: true } : c
		)
		setContacts(updatedContacts)

		try {
			const result = await toggleUserStatus(contact.id, contact.isActive)
			if (result.success) {
				const updatedContacts = contacts.map((c) =>
					c.id === contact.id ? { ...c, isLoading: false } : c
				)
				setContacts(updatedContacts)
			} else {
				throw new Error(result.message)
			}
		} catch (error) {
			const revertedContacts = contacts.map((c) =>
				c.id === contact.id
					? { ...c, isActive: !c.isActive, isLoading: false }
					: c
			)
			setContacts(revertedContacts)
			toast.error(error.message)
		}
	}

	const handleUpdateName = () => {
		setSelectedContact(contact)
		setNewName(`${contact.firstName} ${contact.lastName}`)
		setShowModal(true)
	}

	const handleNameChange = (e) => {
		setNewName(e.target.value)
	}

	const handleSaveName = async () => {
		setLoading(true)
		try {
			const result = await updateUserName(selectedContact.id, newName)
			if (result.success) {
				const updatedContacts = contacts.map((c) =>
					c.id === selectedContact.id
						? {
								...c,
								firstName: newName.split(' ')[0],
								lastName: newName.split(' ')[1],
							}
						: c
				)
				setContacts(updatedContacts)
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
					<Button variant="primary" onClick={handleSaveName}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default ContactActions
