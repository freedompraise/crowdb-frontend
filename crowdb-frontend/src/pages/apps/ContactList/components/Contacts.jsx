import { Table, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SearchBar } from '@/layout/TopNavbar/components'
import { Spinner } from '@/components'
import ContactActions from './ContactActions'

const Contacts = ({ contacts, setContacts }) => {
	if (!contacts.length) {
		return <Spinner animation="border" />
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
								<ContactActions
									contact={contact}
									setContacts={setContacts}
									contacts={contacts}
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
