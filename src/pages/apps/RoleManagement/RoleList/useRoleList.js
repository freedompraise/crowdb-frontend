import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const API_URL = import.meta.env.VITE_API_URL

export const useRoleList = () => {
	const [roles, setRoles] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchRoles = async () => {
			try {
				const res = await axios.get(`${API_URL}/admin/roles`, {
					headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
				})
				setRoles(
					res.data.data.map((role) => ({
						...role,
						permissions: role.permissions || [],
					}))
				)
			} catch (e) {
				throw new Error(e.response?.data?.message || 'An error occurred')
			} finally {
				setLoading(false)
			}
		}

		fetchRoles()
	}, [])

	const handleDelete = async (id) => {
		setLoading(true)
		try {
			await axios.delete(`${API_URL}/admin/roles/${id}`, {
				headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
			})
			setRoles(roles.filter((role) => role.id !== id))
			toast.success('Role deleted successfully', {
				position: 'top-right',
			})
		} catch (e) {
			toast.error(e.response?.data?.message || 'An error occurred')
		} finally {
			setLoading(false)
		}
	}

	return { roles, loading, error, handleDelete }
}
