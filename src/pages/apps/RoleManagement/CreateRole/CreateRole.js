import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const API_URL = import.meta.env.VITE_API_URL

export const useCreateRole = () => {
	const [permissions, setPermissions] = useState([])
	const [selectedPermissions, setSelectedPermissions] = useState([])
	const [roleName, setRoleName] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
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

		fetchPermissions()
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		setError(null)

		const newRole = {
			name: roleName,
			permissions: selectedPermissions.filter((perm) =>
				permissions.includes(perm)
			),
		}

		try {
			await axios.post(`${API_URL}/admin/roles`, newRole, {
				headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
			})
			toast.success('Role created successfully')
			navigate('/roles')
			setRoleName('')
			setSelectedPermissions([])
		} catch (e) {
			setError(e.response?.data?.message || 'An error occurred')
		} finally {
			setLoading(false)
		}
	}

	return {
		permissions,
		selectedPermissions,
		setSelectedPermissions,
		roleName,
		setRoleName,
		loading,
		error,
		handleSubmit,
	}
}
