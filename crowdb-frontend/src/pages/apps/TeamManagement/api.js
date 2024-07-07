const API_URL = import.meta.env.VITE_API_URL

export const postInviteUser = async () => {
	try {
		const invite = await fetch(`${API_URL}/admins/auth/invite`, {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
		if (!invite.ok) {
			throw new Error('Error inviting user')
		}
		const data = await invite.json()
		console.log('The user was invited successfully!', data.data)
		return data.data
	} catch (error) {
		console.error('Error:', error.message)
	}
}

export const defaultFormData = {
	email: '',
	firstName: '',
	role: '',
}
