import { useEffect, useState } from 'react'
import {
	Card,
	CardBody,
	Col,
	Row,
	Container,
	Image,
	Badge,
	Button,
} from 'react-bootstrap'
import {
	FaEdit,
	FaMapMarkerAlt,
	FaMoneyBillWave,
	FaTrash,
} from 'react-icons/fa'
import { toggleVoting } from '../api'
import { toast } from 'sonner'
import { SuccessToast } from '@/components'
import PriceHistoryChart from './PriceHistory'
import VotesBreakdown from './VotesBreakdown'
import VotesHistory from './VotesHistory'

const PropertyDetailCard = ({ propertyData }) => {
	const {
		id,
		status = 'N/A',
		currency = 'N/A',
		price = 'N/A',
		images = [],
		name = 'N/A',
		address = 'N/A',
		slots = 'N/A',
		description = 'N/A',
		amenities = [],
		isVoteActive,
	} = propertyData || {}

	const [votingStatus, setVotingStatus] = useState(isVoteActive)

	const handleToggleVoting = async () => {
		try {
			await toggleVoting(id, votingStatus)
			SuccessToast(
				`Voting has been ${votingStatus ? 'deactivated' : 'activated'}`
			)
			setVotingStatus(!votingStatus)
		} catch (error) {
			toast.error(error.message)
		}
	}

	return (
		<Container fluid>
			<Row>
				<Col lg={4} className="mb-3">
					<Card className="mb-3">
						<CardBody>
							<h5>{name}</h5>
							<p>
								<FaMoneyBillWave /> {currency} {price}
							</p>
							<p>
								<FaMapMarkerAlt /> Location: {address}
							</p>
							<p>Slots: {slots}</p>
							<p>Description: {description}</p>
						</CardBody>
					</Card>
					<Card className="mb-3">
						<CardBody>
							{images && images.length > 0 ? (
								<Image src={images[0]} alt="Property" fluid />
							) : (
								<p>No image available</p>
							)}
						</CardBody>
					</Card>
					<Card className="mb-3">
						<CardBody>
							<h5>Amenities</h5>
							<Row>
								{amenities && amenities.length > 0 ? (
									amenities.map((amenity, index) => (
										<Col key={index} xs={2} className="mb-2">
											<Badge pill bg="info">
												{amenity}
											</Badge>
										</Col>
									))
								) : (
									<p>No amenities available</p>
								)}
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col lg={4} className="mb-3">
					<Card className="mb-3">
						<CardBody>
							<h5 className="text-uppercase">{status}</h5>
							<p>
								<FaMoneyBillWave /> {currency} {price}
							</p>
						</CardBody>
					</Card>
					<VotesBreakdown propertyId={id} />
					<Card className="mb-3">
						<CardBody>
							<h5>Transaction History</h5>
							<p>No transaction history available</p>
						</CardBody>
					</Card>
				</Col>
				<Col lg={4} className="mb-3">
					<PriceHistoryChart propertyId={id} />
					<Card className="mb-3">
						<CardBody>
							<h5>Voting Status</h5>
							<p>
								Voting is currently{' '}
								{votingStatus ? (
									<Badge pill bg="success">
										Active
									</Badge>
								) : (
									<Badge pill bg="danger">
										Inactive
									</Badge>
								)}
							</p>
							<Button onClick={handleToggleVoting}>
								{votingStatus ? 'Deactivate Voting' : 'Activate Voting'}
							</Button>
						</CardBody>
					</Card>
					<VotesHistory propertyId={id} />
				</Col>
			</Row>
		</Container>
	)
}

export default PropertyDetailCard
