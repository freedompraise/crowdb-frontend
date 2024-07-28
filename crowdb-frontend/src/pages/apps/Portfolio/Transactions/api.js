const API_URL = import.meta.env.VITE_API_URL

export const fetchPortfolioTransactions = async () => {
	try {
		const response = await fetch(`${API_URL}/admin/portfolio`, {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
		})

		if (!response.ok) {
			throw new Error('Error fetching data from the server')
		}
		const data = await response.json()
		return data.data
	} catch (err) {
		throw new Error('Error fetching transactions. Please try again later.')
	}
}
