import { useState, useEffect } from 'react'
import { Modal, Button, Table, Alert, Spinner } from 'react-bootstrap'
import axios from 'axios'

const VotesHistory = ({ propertyId }) => {
	const [sessions, setSessions] = useState([])
	const [votes, setVotes] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [showModal, setShowModal] = useState(false)
	const API_URL = import.meta.env.VITE_API_URL

	useEffect(() => {
		const fetchSessionsAndVotes = async () => {
			setLoading(true)
			setError(null)
			try {
				const sessionsResponse = await axios.get(
					`${API_URL}/vote/admin/vote-sessions/${propertyId}`,
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem('token')}`,
						},
					}
				)

				if (
					sessionsResponse.data &&
					Array.isArray(sessionsResponse.data.data)
				) {
					setSessions(sessionsResponse.data.data)
					const sessionIds = sessionsResponse.data.data.map(
						(session) => session.id
					)

					const votesResponses = await Promise.all(
						sessionIds.map((sessionId) =>
							axios.get(`${API_URL}/vote/admin/votes/${sessionId}`, {
								headers: {
									Authorization: `Bearer ${localStorage.getItem('token')}`,
								},
							})
						)
					)

					const votesData = votesResponses.reduce((acc, response, index) => {
						acc[sessionIds[index]] = response.data
						return acc
					}, {})

					setVotes(votesData)
				} else {
					throw new Error(
						'Invalid response format: Expected an array of sessions.'
					)
				}
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchSessionsAndVotes()
	}, [propertyId, API_URL])

	const handleShowModal = () => setShowModal(true)
	const handleCloseModal = () => setShowModal(false)

	return (
		<div>
			{loading ? (
				<Spinner animation="border" />
			) : error ? (
				<Alert variant="danger">{error}</Alert>
			) : sessions.length === 0 ? (
				<Alert variant="info">No votes on this property yet</Alert>
			) : (
				<Button onClick={handleShowModal}>Show Votes History</Button>
			)}

			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Votes History</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{sessions.map((session) => (
						<div key={session.id} className="mb-3">
							<h5>Session ID: {session.id}</h5>
							<Table bordered hover>
								<thead>
									<tr>
										<th>ID</th>
										<th>Created At</th>
										<th>Updated At</th>
										<th>Option</th>
										<th>Weight</th>
										<th>User</th>
									</tr>
								</thead>
								<tbody>
									{votes[session.id] && votes[session.id].length > 0 ? (
										votes[session.id].map((vote) => (
											<tr key={vote.id}>
												<td>{vote.id}</td>
												<td>{new Date(vote.createdAt).toLocaleString()}</td>
												<td>{new Date(vote.updatedAt).toLocaleString()}</td>
												<td>{vote.option}</td>
												<td>{vote.weight}</td>
												<td>{`${vote.user.firstName} ${vote.user.lastName}`}</td>
											</tr>
										))
									) : (
										<tr>
											<td colSpan="6" className="text-center">
												No votes for this session
											</td>
										</tr>
									)}
								</tbody>
							</Table>
						</div>
					))}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default VotesHistory
