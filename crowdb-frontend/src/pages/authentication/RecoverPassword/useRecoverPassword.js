import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const API_URL = import.meta.env.VITE_API_URL

const useRecoverPassword = () => {
	const [loading, setLoading] = useState(false)

	const schemaResolver = yup.object().shape({
		email: yup
			.string()
			.required('Please enter Email')
			.email('Please enter a valid Email'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})

	const onSubmit = async (data) => {
		setLoading(true)
		try {
			const response = await axios.post(
				`${API_URL}/admins/auth/forgot-password`,
				{
					email: data.email,
				}
			)
			toast.success(
				'Please check your email inbox for a link to reset your password.'
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

export default useRecoverPassword
