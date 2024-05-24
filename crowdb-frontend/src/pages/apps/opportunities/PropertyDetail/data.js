const API_URL = import.meta.env.VITE_API_URL;

export const getPropertyData = async (propertyId) => {
	try {
		const property = await fetch(`${API_URL}/package/${propertyId}`);
		if (!property.ok) {
			throw new Error('Error fetching property data');
		}
		const data = await property.json();
		return data;

	} catch (error) {
		console.error('Error:', error.message);
	}
}