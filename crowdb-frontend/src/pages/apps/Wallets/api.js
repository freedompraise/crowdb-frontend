import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const apiClient = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	},
})

export const fetchNGNWallets = async () => {
	const response = await apiClient.get('/wallet/ngn')
	return response.data.data
}

export const fetchUSDWallets = async () => {
	const response = await apiClient.get('/wallet/usd')
	console.log(response)
	return response.data.data
}

export const lockWallet = async (walletId) => {
	const response = await apiClient.put(`/wallet/lock/${walletId}`)
	return response.data.data
}

export const unlockWallet = async (walletId) => {
	const response = await apiClient.put(`/wallet/unlock/${walletId}`)
	return response.data.data
}
