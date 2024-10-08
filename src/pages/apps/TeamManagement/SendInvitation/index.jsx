import { useState, useEffect } from 'react'
import { postInviteUser, defaultFormData, fetchAllRoles } from './api'
import { PageBreadcrumb2 } from '@/components'
import { toast } from 'sonner'

const InviteUser = () => {
	const [formData, setFormData] = useState(defaultFormData)
	const [errors, setErrors] = useState({})
	const [roles, setRoles] = useState([])
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleRoleChange = (event) => {
		setFormData({
			...formData,
			roleId: event.target.value,
		})
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setIsSubmitting(true)
		setErrors({})

		try {
			const result = await postInviteUser(formData)

			if (result.success) {
				toast.success('User was invited successfully!', {
					position: 'top-right',
				})
				setFormData(defaultFormData)
			} else {
				setErrors({ message: result.message })
				toast.error(
					'User has already been invited! Try resetting password with the email.',

					{
						position: 'top-right',
					}
				)
			}
		} catch (error) {
			console.error('Error inviting user:', error.message)
			setErrors({ message: error.message })
		} finally {
			setIsSubmitting(false)
		}
	}

	useEffect(() => {
		const fetchRoles = async () => {
			const { success, data } = await fetchAllRoles()
			if (success) {
				setRoles(data)
			}
		}
		fetchRoles()
	}, [])

	return (
		<div className="container">
			<PageBreadcrumb2
				title="Invite User"
				items={[
					{ title: 'Dashboard', link: '/dashboard' },
					{ title: 'Invite User' },
				]}
			/>
			<div className="card">
				<div className="card-body">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
								placeholder="Enter email"
								value={formData.email}
								required
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="firstName" className="form-label">
								First Name
							</label>
							<input
								type="text"
								className="form-control"
								id="firstName"
								name="firstName"
								placeholder="Enter first name"
								value={formData.firstName}
								pattern="^[a-zA-Z]+$"
								title="Enter a valid first name (only letters allowed)"
								required
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="lastName" className="form-label">
								Last Name
							</label>
							<input
								type="text"
								className="form-control"
								id="lastName"
								name="lastName"
								placeholder="Enter last name"
								value={formData.lastName}
								pattern="^[a-zA-Z]+$"
								title="Enter a valid last name (only letters allowed)"
								required
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="roleId" className="form-label">
								Role
							</label>
							<select
								className="form-control"
								id="roleId"
								name="roleId"
								value={formData.roleId}
								onChange={handleRoleChange}
								required>
								<option value="">Select a role</option>
								{roles.map((role) => (
									<option key={role.id} value={role.id}>
										{role.name}
									</option>
								))}
							</select>
						</div>

						<button type="submit" className="btn btn-primary">
							{isSubmitting ? 'Submitting...' : 'Submit'}
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default InviteUser
