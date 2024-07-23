// PriceHistoryChart.js
import { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import { Card, CardBody } from 'react-bootstrap'

export const PriceHistoryChart = ({ propertyId, setFetchError }) => {
	const [priceHistory, setPriceHistory] = useState([])
	const chartRef = useRef(null)
	const API_URL = import.meta.env.VITE_API_URL

	useEffect(() => {
		const fetchPriceHistory = async () => {
			try {
				const endpoint = `${API_URL}/package/${propertyId}/price-history`
				const response = await fetch(endpoint, {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token'),
					},
				})
				if (!response.ok) {
					throw new Error('Error fetching price history')
				}
				const data = await response.json()
				setPriceHistory(data.data)
			} catch (error) {
				setFetchError(error.message)
			}
		}
		fetchPriceHistory()
	}, [propertyId, setFetchError])

	useEffect(() => {
		if (chartRef.current) {
			const ctx = chartRef.current.getContext('2d')
			const chart = new Chart(ctx, {
				type: 'line',
				data: {
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
				},
				options: {
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
				},
			})

			return () => {
				if (chart) {
					chart.destroy()
				}
			}
		}
	}, [priceHistory])

	return (
		<Card className="mb-3">
			<CardBody>
				<h5>Price History</h5>
				{priceHistory.length > 0 ? (
					<canvas ref={chartRef} />
				) : (
					<p>No price history available</p>
				)}
			</CardBody>
		</Card>
	)
}

export default PriceHistoryChart
