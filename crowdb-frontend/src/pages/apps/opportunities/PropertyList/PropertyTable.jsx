import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import house from '@/assets/images/properties/house.jpg'
import PropertyActions from './PropertyActions'

const PropertyTable = ({ properties, onUpdate }) => {
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
									<Link
										to={`/opportunities/property-detail/${property.id}`}
										className="d-inline-block align-middle mb-0 product-name"
										style={{
											maxWidth: '150px',
											display: 'block',
											whiteSpace: 'nowrap',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
										}}>
										{property.name}
									</Link>
									<br />
									<span className="text-muted font-13">
										{property.currency} {property.price}
									</span>
								</p>
							</td>
							<td>
								{property.amenities ? property.amenities.join(', ') : 'N/A'}
							</td>
							<td>{property.address || 'N/A'}</td>
							<td>{property.slots || 'N/A'}</td>
							<td>
								<span
									className={`badge badge-soft-${property.isVisible ? 'secondary' : 'primary'}`}>
									{property.isVisible ? 'On' : 'Off'}
								</span>
							</td>
							<td>{property.size ? property.size : 'N/A'}</td>
							<td>
								<PropertyActions property={property} onUpdate={onUpdate} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default PropertyTable
