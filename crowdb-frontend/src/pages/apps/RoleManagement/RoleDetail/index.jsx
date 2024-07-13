import React, { useEffect, useState } from 'react'
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
import Select from 'react-select'

const RoleDetail = () => {
	const { id } = useParams()
	const {
		role,
		permissions,
		selectedPermissions,
		setSelectedPermissions,
		loading,
		error,
		updateError,
		setRole,
		updateRole,
	} = useRole(id)
	const navigate = useNavigate()
	const [roleName, setRoleName] = useState('')

	useEffect(() => {
		if (role) {
			setRoleName(role.name)
			setSelectedPermissions(
				role.permissions.map((perm) => perm) // assuming permissions are strings
			)
		}
	}, [role])

	const handlePermissionChange = (permission) => {
		if (selectedPermissions.includes(permission)) {
			setSelectedPermissions(
				selectedPermissions.filter((perm) => perm !== permission)
			)
		} else {
			setSelectedPermissions([...selectedPermissions, permission])
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const updatedRole = {
			name: roleName,
			permissions: selectedPermissions,
		}

		await updateRole(updatedRole)
		if (!updateError) {
			navigate('/roles')
		}
	}

	if (loading) return <Spinner animation="border" />
	if (error) return <Alert variant="danger">{error}</Alert>

	return (
		<div>
			<h1>Update Role</h1>
			{updateError && <Alert variant="danger">{updateError}</Alert>}
			<Form onSubmit={handleSubmit}>
				<Row>
					<Col md={6}>
						<Form.Group controlId="roleName">
							<Form.Label>Role Name</Form.Label>
							<Form.Control
								type="text"
								value={roleName}
								onChange={(e) => setRoleName(e.target.value)}
								required
							/>
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
