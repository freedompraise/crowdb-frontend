import { Button, Card, CardBody, Col, Form, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FormTextInput, PageMetaData } from '@/components'
import AuthLayout from '../AuthLayout'
import useResetPassword from './useResetPassword'

const ResetPassword = () => {
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const email = queryParams.get('email')
	const token = queryParams.get('token')

	const { control, handleSubmit, loading } = useResetPassword(email, token)

	return (
		<AuthLayout>
			<PageMetaData title="Reset Password" />

			<Card>
				<CardBody className="p-0 auth-header-box">
					<div className="text-center p-3">
						<h4 className="mt-3 mb-1 fw-semibold text-white font-18">
							Reset Your Password
						</h4>
						<p className="text-muted mb-0">Enter your new password below.</p>
					</div>
				</CardBody>
				<CardBody>
					<Form className="form-horizontal auth-form" onSubmit={handleSubmit}>
						<FormTextInput
							name="password"
							label="New Password"
							type="password"
							placeholder="Enter New Password"
							containerClass="mb-3"
							control={control}
						/>
						<FormTextInput
							name="confirmPassword"
							label="Confirm Password"
							type="password"
							placeholder="Confirm New Password"
							containerClass="mb-3"
							control={control}
						/>

						<Row className="form-group mb-0">
							<Col xs={12} className="mt-2">
								<Button
									variant="primary"
									className="w-100 waves-effect waves-light"
									type="submit"
									disabled={loading}>
									{loading ? 'Resetting...' : 'Reset Password'}{' '}
									<i className="fas fa-sign-in-alt ms-1"></i>
								</Button>
							</Col>
						</Row>
					</Form>
					<p className="text-muted mb-0 mt-3">
						Remember It?{' '}
						<Link to="/auth/login" className="text-primary ms-2">
							Sign in here
						</Link>
					</p>
				</CardBody>
				<CardBody className="bg-light-alt text-center">
					<span className="text-muted d-none d-sm-inline-block">
						CrowdB © {new Date().getFullYear()}
					</span>
				</CardBody>
			</Card>
		</AuthLayout>
	)
}

export default ResetPassword
