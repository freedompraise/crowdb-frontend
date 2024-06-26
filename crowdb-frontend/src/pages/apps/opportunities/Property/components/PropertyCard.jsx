import { Button, Card, CardBody, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PropertyCard = ({ property }) => {
	const {
		category,
		name,
		offer,
		price,
		image,
		ribbon,
		ribbonColor,
		ribbonClass,
	} = property
	return (
		<Card>
			<CardBody>
				<div className={`${ribbon} ${ribbonColor}`}>
					<span className={`text-white text-center ${ribbonClass}`}>
						{offer}
					</span>
				</div>
				<Image
					src={image}
					alt=""
					className="d-block mx-auto my-4"
					height={150}
				/>
				<Row className="my-4">
					<div className="col">
						<span className="badge badge-light mb-2">{category}</span>
						<Link to="#" className="title-text d-block">
							{name}
						</Link>
					</div>
					<div className="col-auto">
						<h4 className="text-dark mt-0">
							N{price}{'M'}
						</h4>
						<ul className="list-inline mb-0 product-review align-self-center">
							{Array.from(new Array(Math.floor(4))).map((idx) => {
								return (
									<li key={idx} className="list-inline-item me-1">
										<i className="la la-star text-warning font-16" />
									</li>
								)
							})}
							<li className="list-inline-item">
								<i className="la la-star-half-o text-warning font-16"></i>
							</li>
						</ul>
					</div>
				</Row>
				<Button variant="soft-primary" className="w-100">
					Update Status
				</Button>
			</CardBody>
		</Card>
	)
}
export default PropertyCard
