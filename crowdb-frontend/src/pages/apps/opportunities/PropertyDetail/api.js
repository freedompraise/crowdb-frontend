import axios from 'axios'
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

export const toggleVoting = async (propertyId, isActive) => {
	const endpoint = isActive ? 'deactivate' : 'activate'
	try {
		const response = await axios.post(
			`${API_URL}/vote/admin/${endpoint}/${propertyId}`,
			null,
			{
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			}
		)
		console.log(
			`Toggled voting to ${isActive ? 'inactive' : 'active'}`,
			response.data
		)
		return response.data.data
	} catch (error) {
		throw new Error(
			error.response?.data?.message ||
				`An error occurred while toggling voting to ${isActive ? 'inactive' : 'active'}`
		)
	}
}
