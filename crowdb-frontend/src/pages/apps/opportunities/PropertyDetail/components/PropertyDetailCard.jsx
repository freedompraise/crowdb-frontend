import { Card, CardBody, Col, FormControl, Image, Row } from 'react-bootstrap'

const PropertyDetailCard = ({ propertyData }) => {
	return (
		<Card>
			<CardBody>
				<Row>
					<Col lg={6} className="align-self-center">
						<Image
							src={propertyData.image}
							alt=""
							className=" mx-auto  d-block"
							height="300"
						/>
					</Col>
					<Col lg={6} className="align-self-center">
						<div className="single-pro-detail">
							<p className="mb-1">CrowdB Properties</p>
							<div className="custom-border mb-3"></div>
							<h3 className="pro-title">{propertyData.name}</h3>
							<p className="text-muted mb-0"></p>
							<h2 className="pro-price">
								{propertyData.currency}{propertyData.marketValue}{' '}
							</h2>
							<h6 className="font-13">Available slots:
								<span className="">{propertyData.slots}</span>
							</h6>
							<h6 className="font-13">Size:
								<span className="">{propertyData.sizeSqft} sqft</span>
							</h6>
							<h6 className="font-13">Zip Code:
								<span className="">{propertyData.zipCode}</span>
							</h6>
							<h6 className="font-13">Address:
								<span className="">{propertyData.address}</span>
							</h6>
							<h6 className="font-13">Owner:
								<span className="">{propertyData.owner}</span>
							</h6>
							{/* <h6 className="font-13">Previous Owners:
								<span className="">{propertyData.previousOwners.join(', ')}</span>
							</h6> */}
							<h6 className="font-13">Vote Results:
								
							</h6>
						</div>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}
export default PropertyDetailCard
