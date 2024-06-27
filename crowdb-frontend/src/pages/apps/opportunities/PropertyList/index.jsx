import { useEffect, useState } from 'react'
import { PageBreadcrumb2 } from '@/components'
import { Col, Row, Alert } from 'react-bootstrap'
import { fetchAllProperties } from '../data'
import { Link } from 'react-router-dom'
import PropertyTable from './PropertyTable'

const PropertyList = () => {
	const [properties, setProperties] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getProperties = async () => {
			try {
				const data = await fetchAllProperties()
				setProperties(data || [])
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		getProperties()
	}, [])

	return (
		<>
			<PageBreadcrumb2 appName="Opportunities" title="Properties List" />
			<Row>
				<Col lg={12}>
					{loading && <p>Loading...</p>}
					{!loading && error && <Alert variant="danger">Error: {error}</Alert>}
					{!loading && !error && <p>No properties available at the moment.</p>}
					{!loading && !error && <PropertyTable properties={properties} />}
					<Row>
						<Col>
							<Link
								to="/apps/opportunities/create-property"
								className="btn btn-outline-light btn-sm px-4">
								+ Add New
							</Link>
						</Col>
						<Col xs="auto">
							<nav aria-label="...">
								<ul className="pagination pagination-sm mb-0">
									<li className="page-item disabled">
										<Link className="page-link" to="#" tabIndex={-1}>
											Previous
										</Link>
									</li>
									<li className="page-item active">
										<Link className="page-link" to="#">
											1
										</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" to="#">
											2 <span className="sr-only">(current)</span>
										</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" to="#">
											3
										</Link>
									</li>
									<li className="page-item">
										<Link className="page-link" to="#">
											Next
										</Link>
									</li>
								</ul>
							</nav>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	)
}

export default PropertyList
