const API_URL = import.meta.env.VITE_API_URL

export const postInviteUser = async (formData) => {
	try {
		const response = await fetch(`${API_URL}/admins/auth/invite`, {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: formData,
		})
		if (!response.ok) {
			const error = await response.json()
			throw new Error(`Error inviting user: ${error.message}`)
		}
		const data = await response.json()
		console.log('The user was invited successfully!', data.data)
		return data.data
	} catch (error) {
		console.error('Error:', error.message)
		throw error
	}
}

export const defaultFormData = {
	email: '',
	firstName: '',
	roleId: '',
}
