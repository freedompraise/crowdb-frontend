import {
	Card,
	CardBody,
	Col,
	Row,
	Container,
	Image,
	Badge,
} from 'react-bootstrap'
import {
	FaEdit,
	FaMapMarkerAlt,
	FaMoneyBillWave,
	FaTrash,
} from 'react-icons/fa'
import { donutChartConfig } from '../data'
import Chart from 'chart.js/auto'
import { useEffect } from 'react'

const PropertyDetailCard = ({ propertyData }) => {
	const {
		status = 'N/A',
		currency = 'N/A',
		price = 'N/A',
		images = [],
		name = 'N/A',
		address = 'N/A',
		zipcode = 'N/A',
		description = 'N/A',
		amenities = [],
	} = propertyData

	useEffect(() => {
		const donutChartTag = document.getElementById('doughnut')
		const donutChart = new Chart(donutChartTag, donutChartConfig)
		return () => {
			donutChart.destroy()
		}
	}, [])

	return (
		<Container fluid>
			<Row>
				<Col lg={4} className="mb-3">
					<Card className="mb-3">
						<CardBody>
							<h5 className="text-uppercase">
								{status}
								{/* <FaEdit style={{ cursor: 'pointer' }} /> */}
							</h5>
							<p>
								<FaMoneyBillWave /> {currency} {price}
							</p>
						</CardBody>
					</Card>
					<Card className="mb-3">
						<CardBody>
							<h5>Vote Statistics</h5>
							<p className="text-muted">No votes available</p>
							{/* <ComponentContainerCard title="Votes Chart">
								<canvas id="doughnut" height={300} />
							</ComponentContainerCard> */}
						</CardBody>
					</Card>
				</Col>
				<Col lg={8} className="mb-3">
					<Row>
						<Col md={6}>
							<Card className="mb-3">
								<CardBody>
									{images ? (
										<Image src={images[0]} alt="Property" fluid />
									) : (
										<p>No image available</p>
									)}
								</CardBody>
							</Card>
						</Col>
						<Col md={6}>
							<Card className="mb-3">
								<CardBody>
									<h5>{name}</h5>
									<p>
										<FaMoneyBillWave /> {currency} {price}
									</p>
									<p>
										<FaMapMarkerAlt /> Location: {address}
									</p>
									<p>Postal Code: {zipcode}</p>
									<p>
										Description: {description}{' '}
										{/* <FaEdit style={{ cursor: 'pointer' }} /> */}
									</p>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<Card className="mb-3">
								<CardBody>
									<h5>Amenities</h5>
									<Row>
										{amenities ? (
											amenities.map((amenity, index) => (
												<Col key={index} xs={2} className="mb-2">
													<Badge pill variant="info">
														{amenity}
													</Badge>{' '}
													<FaTrash style={{ cursor: 'pointer' }} />
												</Col>
											))
										) : (
											<p>No amenities available</p>
										)}
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col md={6}>
							<Card className="mb-3">
								<CardBody>
									<h5>Transaction History</h5>
									{/* Placeholder for transaction history */}
									<p className="">No transaction history available</p>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default PropertyDetailCard
