import { useEffect, useState } from 'react'
import { Table, Card, Dropdown, Modal, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchContacts, toggleUserStatus, updateUserName } from '../api'
import { SearchBar } from '@/layout/TopNavbar/components'
import { toast } from 'sonner'
import { Spinner, SuccessToast } from '@/components'

const Contacts = () => {
	const [contacts, setContacts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [showModal, setShowModal] = useState(false)
	const [selectedContact, setSelectedContact] = useState(null)
	const [newName, setNewName] = useState('')

	useEffect(() => {
		const getContacts = async () => {
			setLoading(true)
			try {
				const result = await fetchContacts()
				setContacts(result)
			} catch (err) {
				setError(
					'An error occurred. Please contact the administrator for assistance.'
				)
				toast.error(error)
			}
			setLoading(false)
		}

		getContacts()
	}, [])

	const handleToggleStatus = async (contact) => {
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

	const handleUpdateName = (contact) => {
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

	if (loading) {
		return <Spinner animation="border" />
	}

	if (error) {
		return <p>{error}</p>
	}

	return (
		<Card>
			<SearchBar text="search user" />
			<Table bordered>
				<thead>
					<tr>
						<th>Customer ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Status</th>
						<th>Phone Number</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((contact, idx) => (
						<tr key={idx}>
							<td>{contact.id}</td>
							<td>
								<Link
									className="link"
									to="#">{`${contact.firstName} ${contact.lastName}`}</Link>
							</td>
							<td>{contact.email}</td>
							<td>
								{contact.isActive ? (
									<span className="text-success">Active</span>
								) : (
									<span className="text-danger">Inactive</span>
								)}
							</td>
							<td>{contact.phoneNumber || 'N/A'}</td>
							<td>
								<Dropdown>
									<Dropdown.Toggle variant="dark" id="dropdown-basic">
										<span className="las la-pen text-secondary fs-5"></span>
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item
											href="#"
											onClick={() => handleToggleStatus(contact)}
											disabled={contact.isLoading}>
											{contact.isActive ? 'Deactivate' : 'Activate'}
										</Dropdown.Item>
										<Dropdown.Item
											href="#"
											onClick={() => handleUpdateName(contact)}>
											Update Name
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
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
		</Card>
	)
}

export default Contacts
