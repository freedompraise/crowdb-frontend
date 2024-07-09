import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const API_URL = import.meta.env.VITE_API_URL

const useResetPassword = (email, token) => {
	const [loading, setLoading] = useState(false)

	const schemaResolver = yup.object().shape({
		password: yup
			.string()
			.required('Please enter a password')
			.min(6, 'Password must be at least 6 characters long'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must match')
			.required('Please confirm your password'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})

	const onSubmit = async (data) => {
		setLoading(true)
		try {
			const response = await axios.put(
				`${API_URL}/admins/auth/reset-password`,
				{
					email,
					token,
					password: data.password,
				}
			)
			toast.success(
				'Your password has been reset successfully. You can now log in with your new password.'
			)
			setLoading(false)
		} catch (error) {
			toast.error(
				error.response?.data?.message || 'An error occurred. Please try again.'
			)
			setLoading(false)
		}
	}

	return {
		control,
		handleSubmit: handleSubmit(onSubmit),
		loading,
	}
}

export default useResetPassword
