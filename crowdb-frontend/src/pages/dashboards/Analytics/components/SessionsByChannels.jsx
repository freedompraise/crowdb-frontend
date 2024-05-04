import { ComponentContainerCard } from '@/components'
import ReactApexChart from 'react-apexcharts'
const TimeToFillSlots = () => {
	const chartOpts = {
		series: [
			{
				name: 'Inflation',
				data: [3, 5, 3, 4, 8],
			},
		],
		chart: {
			height: 355,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				dataLabels: {
					position: 'top', // top, center, bottom
				},
				columnWidth: '15',
				distributed: true,
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return val + 'days'
			},
			offsetY: -20,
			style: {
				fontSize: '12px',
				colors: ['#000'],
			},
		},
		colors: ['#98e7df', '#b8c4d0', '#bec7fa', '#ffe2a3', '#92e6f0'],
		xaxis: {
			categories: ['<N10M', '<N20M', '<N30M', '<N40M', '>N40M'],
			position: 'bottom',
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				fill: {
					type: 'gradient',
					gradient: {
						colorFrom: '#D8E3F0',
						colorTo: '#BED1E6',
						stops: [0, 100],
						opacityFrom: 0.4,
						opacityTo: 0.5,
					},
				},
			},
			tooltip: {
				enabled: true,
			},
		},
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
			strokeDashArray: 3,
		},
		yaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				show: false,
				formatter: function (val) {
					return val + '%'
				},
			},
		},
	}
	return (
		<ComponentContainerCard title="Average Time to Fill Slots">
			<div>
				<ReactApexChart
					height={370}
					options={chartOpts}
					series={chartOpts.series}
					type="bar"
				/>
			</div>
		</ComponentContainerCard>
	)
}
export default TimeToFillSlots
