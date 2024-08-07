import { Button, Card, CardBody, Col, Form, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoDark from '@/assets/images/logo-sm-dark.png'
import { FormTextInput, PageMetaData } from '@/components'
import AuthLayout from '../AuthLayout'
import useForgotPassword from './useForgotPassword'

const RecoverPassword = () => {
	const { control, handleSubmit, loading } = useForgotPassword()

	return (
		<AuthLayout>
			<PageMetaData title="Recover PW" />

			<Card>
				<CardBody className="p-0 auth-header-box">
					<div className="text-center p-3">
						<Link to="/" className="logo logo-admin">
							<Image
								src={logoDark}
								height="50"
								alt="logo"
								className="auth-logo"
							/>
						</Link>
						<h4 className="mt-3 mb-1 fw-semibold text-white font-18">
							Reset Password For CrowdB
						</h4>
						<p className="text-muted mb-0">
							Enter your Email and instructions will be sent to you!
						</p>
					</div>
				</CardBody>
				<CardBody>
					<Form className="form-horizontal auth-form" onSubmit={handleSubmit}>
						<FormTextInput
							name="email"
							label="Email"
							type="email"
							placeholder="Enter Email Address"
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
									{loading ? 'Sending...' : 'Reset'}{' '}
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

export default RecoverPassword
