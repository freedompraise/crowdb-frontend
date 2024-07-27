import axios from 'axios'

export const acceptInvite = async (data) => {
	try {
		const response = await axios.put('/api/invite/accept', data)
		return response.data
	} catch (error) {
		return { success: false, message: error.message }
	}
}
