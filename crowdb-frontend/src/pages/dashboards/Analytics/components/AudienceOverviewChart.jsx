import React from 'react'
import ApexCharts from 'react-apexcharts'
import { Card } from 'react-bootstrap'
import { Spinner } from '@/components'

const AudienceOverviewChart = ({ data }) => {
	const chartOptions = {
		chart: {
			type: 'line',
		},
		xaxis: {
			categories: ['Customers', 'Slots Sold', 'Slots Available'],
		},
		stroke: {
			curve: 'smooth',
		},
		title: {
			text: 'Audience Overview',
		},
	}

	const chartData = [
		{
			name: 'Overview',
			data: [
				data.numberOfCustomers,
				data.numberOfSlotsSold,
				data.numberOfSlotsAvailable,
			],
		},
	]

	return (
		<Card>
			<Card.Body>
				<h5>Audience Overview</h5>
				{data ? (
					<ApexCharts
						options={chartOptions}
						series={chartData}
						type="line"
						height={300}
					/>
				) : (
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				)}
			</Card.Body>
		</Card>
	)
}

export default AudienceOverviewChart
