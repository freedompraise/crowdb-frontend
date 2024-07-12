const API_URL = import.meta.env.VITE_API_URL

export const postInviteUser = async (formData) => {
	try {
		const response = await fetch(`${API_URL}/admins/auth/invite`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(formData),
		})

		if (!response.ok) {
			const error = await response.json()
			throw new Error(`Error inviting user: ${error.message}`)
		}

		const data = await response.json()
		console.log('The user was invited successfully!', data.data)
		return { success: true, data: data.data }
	} catch (error) {
		console.error('Error:', error.message)
		return { success: false, message: error.message }
	}
}

export const fetchAllRoles = async () => {
	try {
		const response = await fetch(`${API_URL}/admin/roles`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
		if (!response.ok) {
			const error = await response.json()
			throw new Error(`Error fetching roles: ${error.message}`)
		}
		const data = await response.json()

		const filteredRoles = data.data.filter(
			(role) => role.name !== 'super-admin'
		)

		return { success: true, data: filteredRoles }
	} catch (error) {
		console.error('Error:', error.message)
	}
}

export const defaultFormData = {
	email: '',
	firstName: '',
	lastName: '',
	roleId: '',
}
