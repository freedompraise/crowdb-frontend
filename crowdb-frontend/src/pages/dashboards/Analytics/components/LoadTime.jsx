import { ComponentContainerCard } from '@/components'
import ReactApexChart from 'react-apexcharts'
import { FiCalendar } from 'react-icons/fi'
const LoadTime = () => {
	const chartOpts = {
		chart: {
			height: 255,
			type: 'donut',
		},
		plotOptions: {
			pie: {
				donut: {
					size: '85%',
				},
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		series: [50, 25, 25],
		legend: {
			show: true,
			position: 'bottom',
			horizontalAlign: 'center',
			// verticalAlign: 'middle',
			floating: false,
			fontSize: '13px',
			offsetX: 0,
			offsetY: 0,
		},
		labels: ['Mobile', 'Tablet', 'Desktop'],
		colors: ['#2a76f4', 'rgba(42, 118, 244, .5)', 'rgba(42, 118, 244, .18)'],
		responsive: [
			{
				breakpoint: 600,
				options: {
					plotOptions: {
						donut: {
							customScale: 0.2,
						},
					},
					chart: {
						height: 240,
					},
					legend: {
						show: false,
					},
				},
			},
		],
		tooltip: {
			y: {
				formatter: function (val) {
					return val + ' %'
				},
			},
		},
	}
	return (
		<ComponentContainerCard
			title="Average Load Time"
		>
			<div className="text-center">
				<ReactApexChart
					height={255}
					className="apex-charts"
					options={chartOpts}
					series={chartOpts.series}
					type="donut"
				/>
				<h6 className="bg-light-alt py-3 px-2 mb-0">
					<FiCalendar className="align-self-center icon-xs me-1" />
					01 April 2024 to 04 May 2024
				</h6>
			</div>
			<div className="table-responsive mt-2">
				<table className="table border-dashed mb-0">
					<thead>
						<tr>
							<th>Device</th>
							<th className="text-end">Average Load Time</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Dasktops</td>
							<td className="text-end">3 seconds</td>
						</tr>
						<tr>
							<td>Tablets</td>
							<td className="text-end">2 seconds </td>
						</tr>
						<tr>
							<td>Mobiles</td>
							<td className="text-end">3 seconds</td>
						</tr>
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}
export default LoadTime
