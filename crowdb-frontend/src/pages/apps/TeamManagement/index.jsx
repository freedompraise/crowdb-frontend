import { useState } from 'react'
import { postInviteUser, defaultFormData } from './api'
import { PageBreadcrumb2 } from '@/components'
import CreatableSelect from 'react-select/creatable'

const InviteUser = () => {
	const [formData, setFormData] = useState(defaultFormData)
	const [errors, setErrors] = useState({})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleRoleChange = (selectedOptions) => {
		setFormData({
			...formData,
			role: selectedOptions.value,
		})
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setIsSubmitting(true)
		setErrors({})
		const result = await postInviteUser(formData)
		console.log('Result:', result)
	}

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
								onError={(e) => {
									e.target.setCustomValidity(
										'Please enter a first name with only letters'
									)
								}}
								required
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="role" className="form-label">
								Role
							</label>
							<CreatableSelect
								id="role"
								name="role"
								value={formData.role}
								required
								onChange={handleRoleChange}
								options={[
									{ value: 'admin', label: 'Admin' },
									{ value: 'user', label: 'User' },
								]}
							/>
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
