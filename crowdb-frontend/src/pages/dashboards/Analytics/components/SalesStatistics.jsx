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
						<p className="mb-0">Pending Transfer Naira Value</p>
						<h2>{data.pendingTransferNairaValue}</h2>
					</Card.Body>
				</Card>
			</Col>
			<Col lg={4}>
				<Card>
					<Card.Body>
						<p className="mb-0">Pending Transfer USD Value</p>
						<h2>{data.pendingTransferUsdValue}</h2>
					</Card.Body>
				</Card>
			</Col>

			<Col lg={4}>
				<Card>
					<Card.Body>
						<p className="mb-0">Pending Transfer Count</p>
						<h2>{data.pendingTransferCount}</h2>
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
