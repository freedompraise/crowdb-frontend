import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const fetchPortfolioTransactions = async () => {
	try {
		const response = await axios.get(`${API_URL}/admin/portfolio`, {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
		})

		return response.data.data
	} catch (err) {
		throw new Error('Error fetching transactions. Please try again later.')
	}
}
