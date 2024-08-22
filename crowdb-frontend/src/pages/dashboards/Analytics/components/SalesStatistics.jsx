import { Card, Col, Row } from 'react-bootstrap'
import { Spinner } from '@/components'

const SalesStatistics = ({ data }) => {
	if (!data) return <Spinner />
	return (
		<Row>
			<h5>Sales Statistics</h5>
			<Col lg={4}>
				<Card>
					<Card.Body>
						<p className="mb-0">Slots Sold</p>
						<h2>{data.numberOfSlotsSold}</h2>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={4}>
				<Card>
					<Card.Body>
						<p className="mb-0">Slots Available</p>
						<h2>{data.numberOfSlotsAvailable}</h2>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={4}>
				<Card>
					<Card.Body>
						<p className="mb-0">Total Naira Balance</p>
						<h2>{data.totalNairaBalance}</h2>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={4}>
				<Card>
					<Card.Body>
						<p className="mb-0">Total USD Balance</p>
						<h2>{data.totalUsdBalance}</h2>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default SalesStatistics
