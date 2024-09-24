import { Card, Col, Row } from 'react-bootstrap'

const Statistics = ({ data }) => (
	<Row>
		<Col lg={4}>
			<Card>
				<Card.Body>
					<h5>Number of Naira Wallets</h5>
					<h3>{data.numberOfNairaWallet}</h3>
				</Card.Body>
			</Card>
		</Col>
		<Col lg={4}>
			<Card>
				<Card.Body>
					<h5>Number of USD Wallets</h5>
					<h3>{data.numberOfUsdWallet}</h3>
				</Card.Body>
			</Card>
		</Col>
		<Col lg={4}>
			<Card>
				<Card.Body>
					<h5>Total Properties</h5>
					<h3>{data.numberOfProperties}</h3>
				</Card.Body>
			</Card>
		</Col>
		<Col lg={4}>
			<Card>
				<Card.Body>
					<h5>Total Amount Invested</h5>
					<h3>{data.totalAmountInvested.toLocaleString()} NGN</h3>
				</Card.Body>
			</Card>
		</Col>
	</Row>
)

export default Statistics
