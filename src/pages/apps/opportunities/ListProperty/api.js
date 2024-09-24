const API_URL = import.meta.env.VITE_API_URL

export const createProperty = async (propertyData) => {
	try {
		const response = await fetch(`${API_URL}/package`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', // Added Content-Type
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(propertyData),
		})

		if (!response.ok) {
			const errorData = await response.json()
			throw new Error(errorData.message || 'Error sending data to the server')
		}

		const data = await response.json()
		return { success: true, data }
	} catch (error) {
		console.error('Error creating property:', error)
		return { success: false, message: error.message }
	}
}

export const defaultFormData = {
	name: '',
	images: [],
	description: '',
	slots: 0,
	price: 0,
	currency: 'NGN',
	size: '',
	code: '',
	owner: '',
	zipcode: '',
	address: '',
	amenities: [],
}
