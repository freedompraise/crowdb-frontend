import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const updateSlots = async (id, slots) => {
	try {
		const response = await axios.patch(
			`${API_URL}/package/${id}/slots`,
			{ slots },
			{
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			}
		)
		return response.data
	} catch (error) {
		throw new Error(error.response?.data?.message || 'Error updating slots')
	}
}

export const updatePrice = async (id, price) => {
	try {
		const response = await axios.patch(
			`${API_URL}/package/${id}/price`,
			{ price },
			{
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			}
		)
		return response.data
	} catch (error) {
		throw new Error(error.response?.data?.message || 'Error updating price')
	}
}

export const makeVisible = async (id) => {
	try {
		const response = await axios.post(
			`${API_URL}/package/${id}/make-visible`,
			null,
			{
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			}
		)
		return response.data
	} catch (error) {
		throw new Error(
			error.response?.data?.message || 'Error making property visible'
		)
	}
}

export const makeInvisible = async (id) => {
	try {
		const response = await axios.post(
			`${API_URL}/package/${id}/make-invisible`,
			null,
			{
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			}
		)
		return response.data
	} catch (error) {
		throw new Error(
			error.response?.data?.message || 'Error making property invisible'
		)
	}
}
