import { useEffect, useState } from 'react'
import { PageBreadcrumb, Spinner } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { fetchAnalyticsData } from './api'
import Statistics from './components/Statistics'
import AudienceOverviewChart from './components/AudienceOverviewChart'
import SalesStatistics from './components/SalesStatistics'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	LineElement,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	LineElement
)

const Analytics = () => {
	const [data, setData] = useState({
		numberOfCustomers: 0,
		numberOfProperties: 0,
		totalAmountInvested: 0,
		numberOfSlotsSold: 0,
		numberOfSlotsAvailable: 0,
		numberOfNairaWallet: 0,
		numberOfUsdWallet: 0,
		totalNairaBalance: 0,
		totalUsdBalance: 0,
		pendingTransferNairaValue: 0,
		pendingTransferUsdValue: 0,
		pendingTransferCount: 0,
	})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const loadData = async () => {
			try {
				const analyticsData = await fetchAnalyticsData()
				setData(analyticsData?.data || data)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}
		loadData()
	}, [])

	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Sales and Analytics" />
			{loading ? (
				<Spinner animation="border" className="d-block mx-auto" />
			) : error ? (
				<div className="text-danger">{error}</div>
			) : (
				<>
					<Row>
						<Col lg={9}>
							<Statistics data={data} />
							<AudienceOverviewChart data={data} />
						</Col>
						{/* <Col lg={3}>
							<ActivityCard height={400} />
						</Col> */}
					</Row>
					<Row>
						<Col lg={6}>
							<SalesStatistics data={data} />
						</Col>
					</Row>
				</>
			)}
		</>
	)
}

export default Analytics
