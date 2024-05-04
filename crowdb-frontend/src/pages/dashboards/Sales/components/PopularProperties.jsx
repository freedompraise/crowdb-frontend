import { ComponentContainerCard } from '@/components'
import { Link } from 'react-router-dom'
import { PopularPropertiesData } from '../data'
import PropertyImage from '@/assets/images/properties/house.jpg'

const PopuplarProperties = () => {
	return (
		<ComponentContainerCard title="Most Popular Properties">
			<div className="table-responsive">
				<table className="table mb-0">
					<thead className="table-light">
						<tr>
							<th className="border-top-0">Property</th>
							<th className="border-top-0">Price</th>
							<th className="border-top-0">Total Views</th>
							<th className="border-top-0">Number of Applications</th>
						</tr>
					</thead>
					<tbody>
						{PopularPropertiesData.map((properties, idx) => {
							return (
								<tr key={idx}>
									<td>
										<div className="media">
											<img
												src={PropertyImage}
												height="30"
												className="me-3 align-self-center rounded"
												alt="..."
											/>
											<div className="media-body align-self-center">
												<h6 className="m-0">{properties.property.propertyName}</h6>
												<a href="#" className="font-12 text-primary">
													ID: {properties.property.propertyID}
												</a>
											</div>
										</div>
									</td>
									<td>
										{properties.price.discountPrice}{' '}
										<del className="text-muted font-10">
											{properties.price.originalPrice}
										</del>
									</td>
									<td>
										{properties.totalViews}{' '}
									</td>
									<td>
											<span className="badge badge-soft-primary px-2">
												{properties.applications}
											</span>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}
export default PopuplarProperties
