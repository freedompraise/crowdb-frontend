import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import house from '@/assets/images/properties/house.jpg'
import PropertyActions from './PropertyActions'

const PropertyTable = ({ properties, setProperties }) => {
	const handlePropertyUpdate = (updatedProperty) => {
		setProperties((prevProperties) =>
			prevProperties.map((property) =>
				property.id === updatedProperty.id ? updatedProperty : property
			)
		)
	}

	const formatNumberWithCommas = (num) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	return (
		<div className="table-responsive">
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Property Name</th>
						<th>Amenities</th>
						<th>Location</th>
						<th>Slots</th>
						<th>Visibility</th>
						<th>Size</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{properties.map((property, idx) => (
						<tr key={idx}>
							<td
								style={{
									width: '200px',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
								}}>
								<Link
									to={`/opportunities/property-detail/${property.id}`}
									className="d-link"
									style={{
										display: 'flex',
										alignItems: 'center',
										textDecoration: 'none',
										color: 'inherit',
										width: '100%',
										padding: '0.5rem',
										borderRadius: '0.25rem',
										transition: 'background-color 0.3s, box-shadow 0.3s',
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = '#121212'
										e.currentTarget.style.boxShadow =
											'0 2px 5px rgba(0, 0, 0, 0.1)'
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = 'transparent'
										e.currentTarget.style.boxShadow = 'none'
									}}>
									{property.images && property.images.length > 0 ? (
										<Image
											src={property.images[0]}
											height={40}
											style={{
												maxWidth: '40px',
												maxHeight: '40px',
												display: 'inline-block',
											}}
										/>
									) : (
										<Image
											src={house}
											height={40}
											style={{
												maxWidth: '40px',
												maxHeight: '40px',
												display: 'inline-block',
											}}
										/>
									)}
									<p
										className="d-inline-block align-middle mb-0 ms-1"
										style={{
											maxWidth: '150px',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
										}}>
										<span
											style={{
												display: 'block',
												whiteSpace: 'nowrap',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
											}}>
											{property.name}
										</span>
										<br />
										<span className="text-muted font-13">
											{property.currency}{' '}
											{formatNumberWithCommas(property.price)}
										</span>
									</p>
								</Link>
							</td>
							<td>
								{property.amenities ? property.amenities.join(', ') : 'N/A'}
							</td>
							<td>{property.address || 'N/A'}</td>
							<td>{property.slots || 'N/A'}</td>
							<td>
								<span
									className={`badge badge-soft-${property.isVisible ? 'success' : 'secondary'}`}>
									{property.isVisible ? 'On' : 'Off'}
								</span>
							</td>
							<td>{property.size ? property.size : 'N/A'}</td>
							<td>
								<PropertyActions
									property={property}
									onUpdate={handlePropertyUpdate}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default PropertyTable
