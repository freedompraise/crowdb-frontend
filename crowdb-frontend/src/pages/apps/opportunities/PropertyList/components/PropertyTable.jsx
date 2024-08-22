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
									className="d-link d-flex align-items-center text-decoration-none w-100 p-2 rounded"
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = '#121212'
										e.currentTarget.style.boxShadow =
											'0 0 10px rgba(0, 0, 0, 0.2)'
										e.currentTarget.querySelector('p').style.color = '#fff'
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = 'transparent'
										e.currentTarget.style.boxShadow = 'none'
										e.currentTarget.querySelector('p').style.color = 'inherit'
									}}>
									{property.images && property.images.length > 0 ? (
										<Image
											src={property.images[0]}
											height={40}
											className="me-2"
										/>
									) : (
										<Image src={house} height={40} className="me-2" />
									)}
									<p
										className="mb-0 ms-1 text-truncate"
										style={{ transition: 'color 0.3s' }}>
										<h5 className="d-block text-truncate">{property.name}</h5>
										<span className="font-13">
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
