import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const useRole = (id) => {
	const [role, setRole] = useState(null)
	const [permissions, setPermissions] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchRole = async () => {
			try {
				const res = await axios.get(`${API_URL}/admin/roles/${id}`, {
					headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
				})
				setRole(res.data.data)
			} catch (e) {
				setError(e.message)
			} finally {
				setLoading(false)
			}
		}

		const fetchPermissions = async () => {
			try {
				const res = await axios.get(`${API_URL}/admin/roles/permissions`, {
					headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
				})
				setPermissions(res.data.data)
			} catch (e) {
				setError(e.message)
			}
		}

		fetchRole()
		fetchPermissions()
	}, [id])

	const updateRole = async (updatedRole) => {
		try {
			await axios.put(`${API_URL}/admin/roles/${id}`, updatedRole, {
				headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
			})
		} catch (e) {
			setError(e.response?.data?.message || 'An error occurred')
		}
	}

	return { role, permissions, loading, error, updateRole }
}
