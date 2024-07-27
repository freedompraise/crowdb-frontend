import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import { acceptInvite } from './api'

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
		<Card>
			<Card.Body>
				<Card.Title>Accept Invitation</Card.Title>
				{success ? (
					<p>Invitation accepted successfully! You can now log in.</p>
				) : (
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" value={email} disabled />
						</Form.Group>
						<Form.Group controlId="formRef">
							<Form.Label>Reference Code</Form.Label>
							<Form.Control type="text" value={ref} disabled />
						</Form.Group>
						<Form.Group controlId="formPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</Form.Group>
						<Form.Group controlId="formConfirmPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
						</Form.Group>
						{error && <p className="text-danger">{error}</p>}
						<Button variant="primary" type="submit" disabled={loading}>
							{loading ? 'Submitting...' : 'Accept Invite'}
						</Button>
					</Form>
				)}
			</Card.Body>
		</Card>
	)
}

export default AcceptInvite
