import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { acceptInvite } from './api'
import { PageBreadcrumb2 } from '@/components'

const AcceptInvite = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [ref, setRef] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search)
		const emailParam = queryParams.get('email')
		const refParam = queryParams.get('ref')
		if (emailParam) setEmail(emailParam)
		if (refParam) setRef(refParam)
	}, [location])

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			setError('Passwords do not match')
			return
		}
		setLoading(true)
		try {
			const result = await acceptInvite({ email, ref, password })
			if (result.success) {
				setSuccess(true)
				navigate('/')
			} else {
				throw new Error(result.message)
			}
		} catch (error) {
			setError(error.message)
		}
		setLoading(false)
	}

	return (
		<div className="container">
			<PageBreadcrumb2
				title="Accept Invitation"
				items={[
					{ title: 'Dashboard', link: '/dashboard' },
					{ title: 'Accept Invitation' },
				]}
			/>
			{success ? (
				<p>Invitation accepted successfully! You can now log in.</p>
			) : (
				<>
					<p>
						Welcome to our platform! We're excited to have you on board. Please
						create your account by accepting the invitation below.
					</p>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formEmail" className="mb-4">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" value={email} />
						</Form.Group>

						<Row>
							<Col md={6}>
								<Form.Group controlId="formPassword" className="mb-4">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</Form.Group>
							</Col>
							<Col md={6}>
								<Form.Group controlId="formConfirmPassword" className="mb-4">
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type="password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										required
									/>
								</Form.Group>
							</Col>
						</Row>

						{error && <p className="text-danger mb-4">{error}</p>}
						<Button variant="primary" type="submit" disabled={loading}>
							{loading ? 'Submitting...' : 'Accept Invite'}
						</Button>
					</Form>
				</>
			)}
		</div>
	)
}

export default AcceptInvite
