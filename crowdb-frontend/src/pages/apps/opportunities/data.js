const API_URL = import.meta.env.VITE_API_URL

export const fetchAllProperties = async () => {
	try {
		const properties = await fetch(`${API_URL}/package/all`, {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
		if (!properties.ok) {
			throw new Error('Error fetching properties')
		}
		const data = await properties.json()
		return data.data
	} catch (error) {
		console.error('Error:', error.message)
	}
}

export const updateProperty = async (id, property) => {
	try {
		const response = await fetch(`${API_URL}/package/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(property),
		})
		if (!response.ok) {
			throw new Error('Error updating property')
		}
		const data = await response.json()
		return data.data
	} catch (error) {
		console.error('Error:', error.message)
	}
}
