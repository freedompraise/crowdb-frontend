import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'
import { FormInputPassword, FormTextInput } from '@/components'
import { Button, Col, Row } from 'react-bootstrap'
const RegisterForm = () => {
	const schemaResolver = yup.object().shape({
		firstname: yup.string().required('Please enter first name'),
		lastname: yup.string().required('Please enter last name'),
		phonenumber: yup.string().required('Please enter a valid Phone Number'),
		email: yup
			.string()
			.required('Please enter Email')
			.email('Please enter valid Email'),
		dateofbirth: yup.string().required('Please enter Date of Birth'),
		password: yup.string().required('Please enter Password'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Passwords must match'),
	})
	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
	})
	const onSubmit = async (data) => {
		try {
			const response = await fetch(
				'https://crowdb.wiseminds.cc//api/v1/auth/register',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			)

			if (response.status === 201) {
				navigate('/auth/login')
			} else {
				const res = await response.json()
			}
		} catch (error) {}
	}
	const navigate = useNavigate()
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="auth-form form-horizontal">
			<FormTextInput
				name="firstname"
				label="First Name"
				containerClass="mb-2"
				control={control}
				placeholder="Enter first name"
			/>
			<FormTextInput
				name="lastname"
				label="Last Name"
				containerClass="mb-2"
				control={control}
				placeholder="Enter last name"
			/>
			<FormTextInput
				name="phonenumber"
				label="Phone Number"
				containerClass="mb-2"
				control={control}
				placeholder="+1 123 456 7890"
			/>
			<FormTextInput
				name="email"
				label="Email"
				containerClass="mb-2"
				control={control}
				placeholder="Enter email"
			/>
			<FormTextInput
				name="dateofbirth"
				label="Date of Birth"
				containerClass="mb-2"
				control={control}
				placeholder="YYYY-MM-DD"
			/>
			<FormInputPassword
				name="password"
				label="Password"
				control={control}
				containerClass="mb-2"
				placeholder="Enter password"
			/>
			<FormInputPassword
				name="confirmPassword"
				label="Confirm Password"
				control={control}
				containerClass="mb-2"
				placeholder="Enter confirm password"
			/>

			<Row className="form-group my-3">
				<Col sm={12}>
					<div className="custom-control custom-switch switch-success">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitchSuccess2"
						/>
						<label
							className="form-label text-black"
							htmlFor="customSwitchSuccess2">
							You agree to the CrowdB{' '}
							<Link to="#" className="text-primary">
								Terms of Use
							</Link>
						</label>
					</div>
				</Col>
			</Row>

			<Row className="form-group mb-0">
				<Col xs={12}>
					<Button
						variant="primary"
						type="submit"
						className="w-100 waves-effect waves-light">
						Register <i className="fas fa-sign-in-alt ms-1"></i>
					</Button>
				</Col>
			</Row>
		</form>
	)
}
export default RegisterForm
