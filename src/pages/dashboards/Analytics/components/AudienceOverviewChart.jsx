import { Spinner } from '@/components'
import { Card, Col, Row } from 'react-bootstrap'

const AudienceOverviewChart = ({ data }) => {
	if (!data) return <Spinner />

	return (
		<Row>
			<h5>Audience Overview</h5>
			<Col lg={4}>
				<Card>
					<Card.Body>
						<div>
							<p className="mb-0">Customers</p>
							<h2>{data.numberOfCustomers}</h2>
						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={4}>
				<Card>
					<Card.Body>
						<div>
							<p className="mb-0">Slots Sold</p>
							<h2>{data.numberOfSlotsSold}</h2>
						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={4}>
				<Card>
					<Card.Body>
						<div>
							<p className="mb-0">Slots Available</p>
							<h2>{data.numberOfSlotsAvailable}</h2>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default AudienceOverviewChart
