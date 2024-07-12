import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRole } from './useRole'
import { Button, Form, Spinner, Alert } from 'react-bootstrap'
import Select from 'react-select'

const RoleDetail = () => {
	const { id } = useParams()
	const { role, permissions, loading, error, updateRole } = useRole(id)
	const navigate = useNavigate()
	const [selectedPermissions, setSelectedPermissions] = useState([])

	useEffect(() => {
		if (role && role.permissions) {
			setSelectedPermissions(
				role.permissions.map((perm) => ({ value: perm, label: perm }))
			)
		}
	}, [role])

	const handleSubmit = async (e) => {
		e.preventDefault()

		const updatedRole = {
			name: role.name,
			permissions: selectedPermissions.map((perm) => perm.value),
		}

		await updateRole(updatedRole)
		navigate('/roles')
	}

	if (loading) return <Spinner animation="border" />
	if (error) return <Alert variant="danger">{error}</Alert>

	return (
		<div>
			<h1>Update Role</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="roleName">
					<Form.Label>Role Name</Form.Label>
					<Form.Control type="text" value={role?.name || ''} readOnly />
				</Form.Group>
				<Form.Group controlId="permissions">
					<Form.Label>Permissions</Form.Label>
					<Select
						isMulti
						value={selectedPermissions}
						options={permissions.map((perm) => ({
							value: perm.id,
							label: perm.name,
						}))}
						onChange={setSelectedPermissions}
					/>
				</Form.Group>
				<Button type="submit" className="mt-3">
					Update Role
				</Button>
			</Form>
		</div>
	)
}

export default RoleDetail
