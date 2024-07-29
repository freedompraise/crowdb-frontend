import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const fetchVirtualAccounts = async (page = 1, limit = 10) => {
	try {
		const response = await axios.get(`${API_URL}/virtual-account/all`, {
			params: { page, limit },

			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
		return response.data
	} catch (error) {
		throw new Error('Error fetching virtual accounts: ' + error.message)
	}
}
