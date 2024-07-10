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

	const handleRoleChange = (selectedOption) => {
		setFormData({
			...formData,
			roleId: selectedOption ? selectedOption.value : '',
		})
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setIsSubmitting(true)
		setErrors({})

		try {
			const result = await postInviteUser(formData)

			if (result.success) {
				console.log('User was invited successfully!')
			} else {
				setErrors({ message: result.message })
			}
		} catch (error) {
			console.error('Error inviting user:', error.message)
			setErrors({ message: error.message })
		} finally {
			setIsSubmitting(false)
		}
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
								title="Enter a valid first name (only letters allowed)"
								required
								onChange={handleChange}
							/>
						</div>
						<CreatableSelect
							id="roleId"
							name="roleId"
							value={
								formData.roleId
									? { value: formData.roleId, label: formData.roleId }
									: null
							}
							required
							onChange={handleRoleChange}
							options={[
								{ value: 'admin', label: 'Admin' },
								{ value: 'user', label: 'User' },
							]}
						/>

						<button type="submit" className="btn btn-primary">
							{isSubmitting ? 'Submitting...' : 'Submit'}
							{/* {errors.message && (
								<div className="alert alert-danger mt-2">{errors.message}</div>
							)} */}
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default InviteUser
