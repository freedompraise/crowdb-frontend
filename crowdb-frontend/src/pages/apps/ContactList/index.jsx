import { useEffect, useState } from 'react'
import { PageBreadcrumb2 } from '@/components'
import Contacts from './components/Contacts'
import { fetchContacts } from './api'
import { Alert, Col } from 'react-bootstrap'

import { toast } from 'sonner'

const ContactList = () => {
	const [contacts, setContacts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const contactsPerPage = 20

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

	const indexOfLastContact = currentPage * contactsPerPage
	const indexOfFirstContact = indexOfLastContact - contactsPerPage
	const currentContacts = contacts.slice(
		indexOfFirstContact,
		indexOfLastContact
	)

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<>
			<PageBreadcrumb2 title="Contacts" appName="Customers" />
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
									{ length: Math.ceil(contacts.length / contactsPerPage) },
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
											Math.ceil(contacts.length / contactsPerPage)
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
