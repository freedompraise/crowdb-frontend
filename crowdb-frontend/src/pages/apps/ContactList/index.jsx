import { useEffect, useState } from 'react'
import { PageBreadcrumb2 } from '@/components'
import Contacts from './components/Contacts'
import { fetchContacts } from './api'
import { Alert, Col } from 'react-bootstrap'
import { SearchBar } from '@/layout/TopNavbar/components'
import { toast } from 'sonner'

const ContactList = () => {
	const [contacts, setContacts] = useState([])
	const [filteredContacts, setFilteredContacts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [searchQuery, setSearchQuery] = useState('')

	const contactsPerPage = 20

	useEffect(() => {
		const getContacts = async () => {
			setLoading(true)
			try {
				const result = await fetchContacts()
				setContacts(result)
				setFilteredContacts(result)
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

	const indexOfLastContact = currentPage * contactsPerPage
	const indexOfFirstContact = indexOfLastContact - contactsPerPage
	const currentContacts = filteredContacts.slice(
		indexOfFirstContact,
		indexOfLastContact
	)

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase()
		setSearchQuery(query)
		const filtered = contacts.filter((contact) => {
			const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase()
			return (
				fullName.includes(query) ||
				contact.email.toLowerCase().includes(query) ||
				contact.id.includes(query)
			)
		})
		setFilteredContacts(filtered)
		setCurrentPage(1)
	}

	return (
		<>
			<PageBreadcrumb2 title="Contacts" appName="Customers" />
			<SearchBar
				text="Search contact name, email, or ID"
				onSearch={handleSearch}
				searchValue={searchQuery}
			/>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<Alert variant="danger">Error: {error}</Alert>
			) : (
				<>
					<Contacts contacts={currentContacts} setContacts={setContacts} />
					<Col xs="auto">
						<nav aria-label="...">
							<ul className="pagination">
								<li className="page-item">
									<button
										className="page-link"
										onClick={() => paginate(currentPage - 1)}
										disabled={currentPage === 1}>
										Previous
									</button>
								</li>
								{Array.from(
									{
										length: Math.ceil(
											filteredContacts.length / contactsPerPage
										),
									},
									(_, i) => (
										<li
											key={i}
											className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
											<button
												className="page-link"
												onClick={() => paginate(i + 1)}>
												{i + 1}
											</button>
										</li>
									)
								)}
								<li className="page-item">
									<button
										className="page-link"
										onClick={() => paginate(currentPage + 1)}
										disabled={
											currentPage ===
											Math.ceil(filteredContacts.length / contactsPerPage)
										}>
										Next
									</button>
								</li>
							</ul>
						</nav>
					</Col>
				</>
			)}
		</>
	)
}

export default ContactList
