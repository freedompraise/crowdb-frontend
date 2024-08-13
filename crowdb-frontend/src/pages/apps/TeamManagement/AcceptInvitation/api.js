import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const acceptInvite = async (data) => {
	try {
		const response = await axios.post(
			`${API_URL}/admins/auth/accept-invitation`,
			data,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			}
		)
		return response.data
	} catch (error) {
		throw new Error('Error accepting invitation: ' + error.message)
	}
}
