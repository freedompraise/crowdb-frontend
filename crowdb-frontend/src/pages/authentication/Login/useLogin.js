import axios from 'axios'
import { useAuthContext } from '@/context'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import * as yup from 'yup'

const API_URL = import.meta.env.VITE_API_URL

export default function useLogin() {
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const { isAuthenticated, saveSession } = useAuthContext()

	const schemaResolver = yup.object().shape({
		email: yup
			.string()
			.email('Please enter a valid email')
			.required('Please enter email'),
		password: yup.string().required('Please enter Password'),
	})

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
		defaultValues: {
			email: 'johndoe@gmail.com',
			password: 'password',
		},
	})

	const redirectUrl =
		searchParams.get('next') ?? '/apps/opportunities/property-list'

	const login = handleSubmit(async function (values) {
		setLoading(true)
		try {
			const res = await axios.post(`${API_URL}/admins/auth/login`, values)
			console.log('API response', res.data)
			if (res.data.data.token) {
				saveSession({
					...(res.data.data.user ?? {}),
					token: res.data.data.token,
				})
				toast.success('Successfully logged in. Redirecting....', {
					position: 'top-right',
					duration: 2000,
				})
				navigate(redirectUrl)
			}
		} catch (e) {
			if (e.response?.data?.message) {
				toast.error(e.response.data.message, {
					position: 'top-right',
					duration: 2000,
				})
			}
		} finally {
			setLoading(false)
		}
	})

	return {
		loading,
		login,
		redirectUrl,
		isAuthenticated,
		control,
	}
}
