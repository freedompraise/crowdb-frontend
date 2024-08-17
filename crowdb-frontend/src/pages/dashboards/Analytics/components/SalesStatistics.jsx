import { Bar } from 'react-chartjs-2'
import { Card } from 'react-bootstrap'
import { Spinner } from '@/components'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const SalesStatistics = ({ data }) => {
	const chartData = {
		labels: ['Slots Sold', 'Slots Available', 'Naira Balance', 'USD Balance'],
		datasets: [
			{
				label: 'Sales Stats',
				data: [
					data.numberOfSlotsSold,
					data.numberOfSlotsAvailable,
					data.totalNairaBalance,
					data.totalUsdBalance,
				],
				backgroundColor: ['#007bff', '#28a745', '#ffc107', '#00ffff'],
			},
		],
	}

	return (
		<Card>
			<Card.Body>
				<h5>Sales Statistics</h5>
				{data ? (
					<Bar data={chartData} />
				) : (
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				)}
			</Card.Body>
		</Card>
	)
}

export default SalesStatistics
