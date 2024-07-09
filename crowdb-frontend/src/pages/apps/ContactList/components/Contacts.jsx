import { useEffect, useState } from 'react'
import { Table, Card, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchContacts } from '../api'
import { SearchBar } from '@/layout/TopNavbar/components'

const Contacts = () => {
	const [contacts, setContacts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getContacts = async () => {
			setLoading(true)
			try {
				const result = await fetchContacts()
				setContacts(result)
				console.log('The results here are:', result)
			} catch (err) {
				setError(err)
			}
			setLoading(false)
		}

		getContacts()
	}, [])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>

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
									<Dropdown.Toggle
										variant="dark"
										id="dropdown-basic"></Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item href="#">View Details</Dropdown.Item>
										<Dropdown.Item href="#">Deactivate</Dropdown.Item>
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
