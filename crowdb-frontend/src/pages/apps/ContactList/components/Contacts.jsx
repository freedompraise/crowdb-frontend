import { useEffect, useState } from 'react'
import { Table, Card, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchContacts, toggleUserStatus } from '../api'
import { SearchBar } from '@/layout/TopNavbar/components'
import { toast } from 'sonner'

const Contacts = () => {
	const [contacts, setContacts] = useState([])
	const [loading, setLoading] = useState(true)

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

	if (loading) return <p>Loading...</p>

	return (
		<Card>
			<SearchBar />
			<Table striped bordered hover responsive>
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
								<Link to="#">{`${contact.firstName} ${contact.lastName}`}</Link>
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
										<Dropdown.Item href="#">Update Name</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Card>
	)
}

export default Contacts
