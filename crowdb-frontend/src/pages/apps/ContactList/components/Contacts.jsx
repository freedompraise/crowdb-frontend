import { useEffect, useState } from 'react'
import { Table, Card, Dropdown, Modal, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchContacts, toggleUserStatus, updateUserName } from '../api'
import { SearchBar } from '@/layout/TopNavbar/components'
import { toast } from 'sonner'

const Contacts = () => {
	const [contacts, setContacts] = useState([])
	const [loading, setLoading] = useState(true)
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
				toast.error(
					'An error occured. Please contact the administrator for assistance.'
				)
				throw new err()
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

		const result = await toggleUserStatus(contact.id, contact.isActive)

		if (result.success) {
			const updatedContacts = contacts.map((c) =>
				c.id === contact.id ? { ...c, isLoading: false } : c
			)
			setContacts(updatedContacts)
		} else {
			const revertedContacts = contacts.map((c) =>
				c.id === contact.id
					? { ...c, isActive: !c.isActive, isLoading: false }
					: c
			)
			setContacts(revertedContacts)
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
			toast.success('User name updated successfully!', {
				position: 'top-right',
			})
		} else {
			toast.error(result.message)
		}
		setLoading(false)
		setShowModal(false)
	}

	if (loading) return <p>Loading...</p>

	return (
		<Card>
			<SearchBar />
			<table className="table table-bordered">
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
			</table>
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
