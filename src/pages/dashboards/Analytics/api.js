const API_URL = import.meta.env.VITE_API_URL

export const fetchAnalyticsData = async () => {
	const response = await fetch(`${API_URL}/analytics`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	})
	if (!response.ok) {
		throw new Error('Failed to fetch analytics data')
	}
	return response.json()
}
