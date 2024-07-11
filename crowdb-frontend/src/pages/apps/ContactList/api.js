const SampleContactsData = [
	{
		id: '87ebf2e1-8e94-431f-9d81-479f45efbafe',
		createdAt: '2024-07-07T01:33:44.597Z',
		updatedAt: '2024-07-07T01:35:12.000Z',
		isEmailVerified: false,
		isActive: true,
		isPinSet: true,
		firstName: 'Rhilaso',
		lastName: 'Dokong',
		email: 'rhilasosilas@yahoo.com',
		phoneNumber: '+2348063108075',
		dateOfBirth: '1991-10-01T11:00:00.000Z',
		bvnVerifiedAt: null,
		referralCode: null,
		refferedBy: null,
	},
]

const API_URL = import.meta.env.VITE_API_URL

export const fetchContacts = async () => {
	try {
		const response = await fetch(`${API_URL}/users/users`, {
			headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
		})

		if (!response.ok) {
			const errorData = await response.json()
			throw new Error(
				errorData.message || 'Error fetching data from the server'
			)
		}

		const data = await response.json()
		return data.data
	} catch (error) {
		console.error('Error fetching contacts:', error)
		return { success: false, message: error.message }
	}
}

export const toggleUserStatus = async (userId, isActive) => {
	const endpoint = isActive
		? `${API_URL}/users/users/deactivate/${userId}`
		: `${API_URL}/users/users/activate/${userId}`

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})

		if (!response.ok) {
			const errorData = await response.json()
			throw new Error(errorData.message || 'Error updating user status')
		}

		const data = await response.json()
		return data.data
	} catch (error) {
		console.error('Error updating user status:', error)
		return { success: false, message: error.message }
	}
}
