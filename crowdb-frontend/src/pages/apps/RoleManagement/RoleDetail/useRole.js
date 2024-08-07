import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

const API_URL = import.meta.env.VITE_API_URL

export const useRole = (id) => {
	const [role, setRole] = useState(null)
	const [permissions, setPermissions] = useState([])
	const [selectedPermissions, setSelectedPermissions] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [updateError, setUpdateError] = useState(null)

	useEffect(() => {
		const fetchRole = async () => {
			try {
				const res = await axios.get(`${API_URL}/admin/roles/${id}`, {
					headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
				})
				const roleData = res.data.data
				setRole(roleData)
				setSelectedPermissions(roleData.permissions || [])
			} catch (e) {
				setError(e.response?.data?.message || 'An error occurred')
			} finally {
				setLoading(false)
			}
		}

		const fetchPermissions = async () => {
			try {
				const res = await axios.get(`${API_URL}/admin/roles/permissions`, {
					headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
				})
				setPermissions(res.data.data || [])
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
			await axios.put(`${API_URL}/admin/roles/${id}`, updatedRole, {
				headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
			})
			toast.success('Role updated successfully')
			setUpdateError(null)
		} catch (e) {
			const errorMessage = e.response?.data?.message || 'An error occurred'
			setUpdateError(errorMessage)
			toast.error(errorMessage)
		} finally {
			setLoading(false)
		}
	}

	return {
		role,
		permissions,
		selectedPermissions,
		setSelectedPermissions,
		loading,
		error,
		updateError,
		updateRole,
	}
}
