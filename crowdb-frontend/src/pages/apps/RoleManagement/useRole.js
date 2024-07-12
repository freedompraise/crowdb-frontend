import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

const API_URL = import.meta.env.VITE_API_URL

export const useRole = (id) => {
	const [role, setRole] = useState(null)
	const [permissions, setPermissions] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchRole = async () => {
			setLoading(true)
			try {
				const res = await axios.get(`${API_URL}/admin/roles/${id}`, {
					headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
				})
				setRole(res.data)
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
				setPermissions(res.data)
			} catch (e) {
				setError(e.message)
			}
		}

		fetchRole()
		fetchPermissions()
	}, [id])

	const updateRole = async (updatedRole) => {
		setLoading(true)
		try {
			const res = await axios.put(`${API_URL}/admin/roles/${id}`, {
				headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
				data: updatedRole,
			})
			setRole(res.data)
			toast.success('Role updated successfully')
		} catch (e) {
			toast.error(e.response?.data?.message || 'An error occurred')
		} finally {
			setLoading(false)
		}
	}

	const deleteRole = async () => {
		setLoading(true)
		try {
			await axios.delete(`${API_URL}/admin/roles/${id}`, {
				headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
			})
			toast.success('Role deleted successfully')
		} catch (e) {
			toast.error(e.response?.data?.message || 'An error occurred')
		} finally {
			setLoading(false)
		}
	}

	return {
		role,
		permissions,
		loading,
		error,
		updateRole,
		deleteRole,
	}
}
