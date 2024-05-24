import { PageBreadcrumb2 } from '@/components'
import { Col, Image, Row } from 'react-bootstrap'
import { allProperties } from './data'
import { Link } from 'react-router-dom'

const ProductList = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Opportunities" title="Properties List" />
			<Row>
				<Col lg={12}>
					<div className="table-responsive">
						<table className="table table-bordered">
							<thead>
								<tr>
									<th>Property Name</th>
									<th>Amenities</th>
									<th>Location</th>
									<th>Size</th>
									<th>Status</th>
									<th>Year Built</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{allProperties.map((property, idx) => {
									return (
										<tr key={idx}>
											<td>
												<Image src={property.image} height={40} />
												<p className="d-inline-block align-middle mb-0 ms-1">
													<Link
														to="/apps/opportunities/property-detail/b72e3036-b0d0-4fec-b497-6bbbe6477a9f"
														className="d-inline-block align-middle mb-0 product-name"
													>
														{property.name}
													</Link>
													<br />
													<span className="text-muted font-13">
														{property.price}
													</span>
												</p>
											</td>
											<td>{property.amenities}</td>
											<td>{property.location}</td>
											<td>${property.area}</td>
											<td>
												<span
													className={`badge badge-soft-${property.status == 'Sale' ? 'pink' : 'purple'}`}
												>
													{property.status}
												</span>
											</td>
											<td>
											{property.yearBuilt}
											</td>
											<td>
												<Link to="" className="me-1">
													<i className="las la-pen text-secondary font-16" />
												</Link>
												<Link to="#">
													<i className="las la-trash-alt text-secondary font-16" />
												</Link>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<Row>
						<Col>
							<button className="btn btn-outline-light btn-sm px-4 ">
								+ Add New
							</button>
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
export default ProductList
