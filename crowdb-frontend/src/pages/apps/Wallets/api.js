// api.js
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const apiClient = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	},
})

export const fetchWallets = async () => {
	const response = await apiClient.get('/wallet/all')
	return response.data.data
}

export const lockWallet = async (walletId) => {
	await apiClient.post('/wallet/lock', { walletId })
}

export const unlockWallet = async (walletId) => {
	await apiClient.post('/wallet/unlock', { walletId })
}
