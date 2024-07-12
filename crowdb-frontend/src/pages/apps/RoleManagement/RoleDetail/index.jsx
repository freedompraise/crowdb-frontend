import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRole } from './useRole'
import {
	Button,
	Form,
	Spinner,
	Alert,
	FormGroup,
	FormCheck,
	Row,
	Col,
} from 'react-bootstrap'

const RoleDetail = () => {
	const { id } = useParams()
	const {
		role,
		permissions,
		selectedPermissions,
		setSelectedPermissions,
		loading,
		error,
		updateRole,
	} = useRole(id)
	const navigate = useNavigate()

	const handlePermissionChange = (permissionId) => {
		if (selectedPermissions.includes(permissionId)) {
			setSelectedPermissions(
				selectedPermissions.filter((id) => id !== permissionId)
			)
		} else {
			setSelectedPermissions([...selectedPermissions, permissionId])
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const updatedRole = {
			name: role.name,
			permissions: selectedPermissions,
		}

		await updateRole(updatedRole)
		// navigate('/roles')
	}

	if (loading) return <Spinner animation="border" />
	if (error) return <Alert variant="danger">{error}</Alert>

	return (
		<div>
			<h1>Update Role</h1>
			<Form onSubmit={handleSubmit}>
				<Row>
					<Col md={6}>
						<Form.Group controlId="roleName">
							<Form.Label>Role Name</Form.Label>
							<Form.Control type="text" value={role?.name || ''} readOnly />
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group controlId="permissions">
							<Form.Label>Permissions</Form.Label>
							<FormGroup>
								{permissions.map((perm) => (
									<FormCheck
										key={perm}
										type="checkbox"
										label={perm}
										checked={selectedPermissions.includes(perm)}
										onChange={() => handlePermissionChange(perm)}
									/>
								))}
							</FormGroup>
						</Form.Group>
					</Col>
				</Row>
				<Button type="submit" className="mt-3">
					Update Role
				</Button>
			</Form>
		</div>
	)
}

export default RoleDetail
