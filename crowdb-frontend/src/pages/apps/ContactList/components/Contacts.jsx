import { useMemo } from 'react'
import { Table, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Spinner } from '@/components'
import ContactActions from './ContactActions'

const Contacts = ({ contacts, setContacts }) => {
	if (!contacts.length) {
		return <Spinner animation="border" />
	}

	const updateContact = (updatedContact) => {
		setContacts((prevContacts) =>
			prevContacts.map((contact) =>
				contact.id === updatedContact.id ? updatedContact : contact
			)
		)
	}

	const memoizedContacts = useMemo(() => contacts, [contacts])

	return (
		<Card>
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
					{memoizedContacts.map((contact, idx) => (
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
								<ContactActions
									contact={contact}
									updateContact={updateContact}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Card>
	)
}

export default Contacts
