const API_URL = import.meta.env.VITE_API_URL

export const getPropertyData = async (propertyId) => {
	try {
		const property = await fetch(`${API_URL}/package/${propertyId}`, {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
		})
		if (!property.ok) {
			throw new Error('Error fetching property data')
		}
		const data = await property.json()
		return data.data
	} catch (error) {
		console.error('Error:', error.message)
	}
}

export const donutChartConfig = {
	type: 'doughnut',
	data: {
		labels: ['Rental', 'Sales', 'AirBnB', 'Other'],
		datasets: [
			{
				data: [70, 100, 90, 80],
				backgroundColor: ['#f7931a', '#4d79f6', '#e0e7fd', '#d0d7e5'],
				borderColor: 'transparent',
				borderRadius: 0,
				hoverBackgroundColor: ['#f7931a', '#4d79f6', '#e0e7fd', '#aeb8d0'],
				hoverBorderColor: 'transparent',
			},
		],
	},
	options: {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					color: '#7c8ea7',
				},
			},
		},
	},
}
