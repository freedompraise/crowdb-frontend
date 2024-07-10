import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { useRole } from '../useRole'
import { PageBreadcrumb2 } from '@/components'

const ViweRoles = () => {
	const { id } = useParams()
	const { role, loading, error, deleteRole } = useRole(id)
	const navigate = useNavigate()

	const handleDelete = () => {
		deleteRole()
		navigate('/roles')
	}

	return (
		<div className="container">
			<PageBreadcrumb2
				title="Delete Role"
				items={[
					{ title: 'Dashboard', link: '/dashboard' },
					{ title: 'Delete Role' },
				]}
			/>
			<div className="card">
				{loading ? (
					<Spinner animation="border" />
				) : error ? (
					<p className="text-danger">{error}</p>
				) : (
					<>
						<p>Are you sure you want to delete the role "{role?.name}"?</p>
						<Button
							variant="danger"
							className="w-100 waves-effect waves-light"
							onClick={handleDelete}>
							Delete Role <i className="fas fa-trash ms-1"></i>
						</Button>
					</>
				)}
			</div>
		</div>
	)
}

export default ViweRoles
