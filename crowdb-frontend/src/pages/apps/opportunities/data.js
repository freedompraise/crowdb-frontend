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
		return data.items
	} catch (error) {
		console.error('Error:', error.message)
	}
}
