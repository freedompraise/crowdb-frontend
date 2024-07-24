import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { Spinner, Card, Alert } from 'react-bootstrap'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

const VotesBreakdown = ({ propertyId }) => {
	const [voteSessions, setVoteSessions] = useState([])
	const [voteBreakdown, setVoteBreakdown] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const API_URL = import.meta.env.VITE_API_URL

	useEffect(() => {
		const fetchVoteSessions = async () => {
			setLoading(true)
			try {
				const response = await fetch(
					`${API_URL}/vote/admin/vote-sessions/${propertyId}`,
					{
						headers: {
							Authorization: 'Bearer ' + localStorage.getItem('token'),
						},
					}
				)
				if (!response.ok) {
					throw new Error('Error fetching vote sessions')
				}
				const data = await response.json()
				setVoteSessions(data.data)
			} catch (err) {
				setError('An error occurred while fetching vote sessions')
			}
			setLoading(false)
		}

		fetchVoteSessions()
	}, [propertyId])

	useEffect(() => {
		const fetchVoteBreakdown = async (sessionId) => {
			try {
				const response = await fetch(
					`${API_URL}/vote/admin/vote/breakdown/${sessionId}`,
					{
						method: 'POST',
						headers: {
							Authorization: 'Bearer ' + localStorage.getItem('token'),
						},
					}
				)
				if (!response.ok) {
					throw new Error('Error fetching vote breakdown')
				}
				const data = await response.json()
				return data.data
			} catch (err) {
				setError('An error occurred while fetching vote breakdown')
			}
		}

		const loadVoteBreakdowns = async () => {
			setLoading(true)
			try {
				const breakdowns = await Promise.all(
					voteSessions.map((session) => fetchVoteBreakdown(session.id))
				)
				const combinedBreakdown = breakdowns.reduce(
					(acc, breakdown) => {
						return {
							lease: acc.lease + breakdown.lease,
							neutral: acc.neutral + breakdown.neutral,
							rent: acc.rent + breakdown.rent,
							resell: acc.resell + breakdown.resell,
						}
					},
					{ lease: 0, neutral: 0, rent: 0, resell: 0 }
				)
				setVoteBreakdown(combinedBreakdown)
			} catch (err) {
				setError('An error occurred while loading vote breakdowns')
			}
			setLoading(false)
		}

		if (voteSessions.length > 0) {
			loadVoteBreakdowns()
		}
	}, [voteSessions])

	const pieData = voteBreakdown && {
		labels: ['Lease', 'Neutral', 'Rent', 'Resell'],
		datasets: [
			{
				data: [
					voteBreakdown.lease,
					voteBreakdown.neutral,
					voteBreakdown.rent,
					voteBreakdown.resell,
				],
				backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#4BC0C0',
					'#9966FF',
					'#FF9F40',
				],
				hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#4BC0C0',
					'#9966FF',
					'#FF9F40',
				],
			},
		],
	}

	const hasVotes =
		voteBreakdown && Object.values(voteBreakdown).some((count) => count > 0)

	return (
		<Card className="mb-3">
			<Card.Body>
				<h5>Vote Statistics</h5>
				{loading ? (
					<Spinner animation="border" />
				) : error ? (
					<Alert variant="danger">{error}</Alert>
				) : !hasVotes ? (
					<p>No votes have been cast for this property.</p>
				) : (
					<Pie data={pieData} />
				)}
			</Card.Body>
		</Card>
	)
}

export default VotesBreakdown
