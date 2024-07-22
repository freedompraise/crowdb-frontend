// PriceHistoryChart.js
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Card, CardBody } from 'react-bootstrap'

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend
)

export const PriceHistoryChart = ({ propertyId }) => {
	const [priceHistory, setPriceHistory] = useState([])

	useEffect(() => {
		const fetchPriceHistory = async () => {
			try {
				const response = await fetch(
					`/api/package/${propertyId}/price-history`,
					{
						headers: {
							Authorization: 'Bearer ' + localStorage.getItem('token'),
						},
					}
				)
				const data = await response.json()
				setPriceHistory(data || [])
			} catch (error) {
				console.error('Error fetching price history:', error)
			}
		}

		fetchPriceHistory()
	}, [propertyId])

	const chartData = {
		labels: priceHistory.map((entry) =>
			new Date(entry.createdAt).toLocaleDateString()
		),
		datasets: [
			{
				label: 'Price History',
				data: priceHistory.map((entry) => entry.price),
				fill: false,
				borderColor: '#4BC0C0',
				tension: 0.1,
			},
		],
	}

	const chartOptions = {
		responsive: true,
		scales: {
			x: {
				title: {
					display: true,
					text: 'Date',
				},
				grid: {
					display: false,
				},
			},
			y: {
				title: {
					display: true,
					text: 'Price',
				},
				beginAtZero: true,
				grid: {
					display: true,
				},
			},
		},
		plugins: {
			legend: {
				display: true,
			},
			tooltip: {
				mode: 'index',
				intersect: false,
			},
		},
	}

	return (
		<Card className="mb-3">
			<CardBody>
				<h5>Price History</h5>
				{priceHistory.length > 0 ? (
					<Line data={chartData} options={chartOptions} />
				) : (
					<p>No price history available</p>
				)}
			</CardBody>
		</Card>
	)
}

export default PriceHistoryChart
