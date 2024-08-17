import { useEffect, useState } from 'react'
import { PageBreadcrumb2 } from '@/components'
import { Col, Row, Alert } from 'react-bootstrap'
import { fetchAllProperties } from '../data'
import { Link } from 'react-router-dom'
import PropertyTable from './components/PropertyTable'
import { SearchBar } from '@/layout/TopNavbar/components'

const PropertyList = () => {
	const [properties, setProperties] = useState([])
	const [filteredProperties, setFilteredProperties] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [propertiesPerPage] = useState(10)
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		const getProperties = async () => {
			try {
				const data = await fetchAllProperties()
				setProperties(data || [])
				setFilteredProperties(data || [])
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		getProperties()
	}, [])

	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase()
		setSearchQuery(query)
		const filtered = properties.filter((property) => {
			return (
				property.name.toLowerCase().includes(query) ||
				property.address.toLowerCase().includes(query) ||
				property.price.toString().includes(query)
			)
		})
		setFilteredProperties(filtered)
		setCurrentPage(1) // Reset to the first page after a search
	}

	const indexOfLastProperty = currentPage * propertiesPerPage
	const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
	const currentProperties = filteredProperties.slice(
		indexOfFirstProperty,
		indexOfLastProperty
	)
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<>
			<PageBreadcrumb2 appName="Opportunities" title="Properties List" />
			<Row>
				<Col lg={12}>
					{/* <SearchBar
						text="Search by name, location, or price"
						onSearch={handleSearch}
						searchValue={searchQuery}
					/> */}
					{loading && <p>Loading...</p>}
					{!loading && error && <Alert variant="danger">Error: {error}</Alert>}
					{!loading && !error && (
						<>
							<PropertyTable
								properties={currentProperties} // Passing the filtered and paginated properties
								setProperties={setProperties}
							/>
							<Row>
								<Col>
									<Link
										to="/opportunities/create-property"
										className="btn btn-outline-light btn-sm px-4">
										+ Add New
									</Link>
								</Col>
								<Col xs="auto">
									<nav aria-label="...">
										<ul className="pagination pagination-sm mb-0">
											<li
												className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
												<Link
													className="page-link"
													to="#"
													onClick={() => paginate(currentPage - 1)}
													tabIndex={-1}>
													Previous
												</Link>
											</li>
											{Array.from(
												{
													length: Math.ceil(
														filteredProperties.length / propertiesPerPage
													),
												},
												(_, index) => (
													<li
														key={index + 1}
														className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
														<Link
															className="page-link"
															to="#"
															onClick={() => paginate(index + 1)}>
															{index + 1}
														</Link>
													</li>
												)
											)}
											<li
												className={`page-item ${currentPage === Math.ceil(filteredProperties.length / propertiesPerPage) ? 'disabled' : ''}`}>
												<Link
													className="page-link"
													to="#"
													onClick={() => paginate(currentPage + 1)}>
													Next
												</Link>
											</li>
										</ul>
									</nav>
								</Col>
							</Row>
						</>
					)}
				</Col>
			</Row>
		</>
	)
}

export default PropertyList
