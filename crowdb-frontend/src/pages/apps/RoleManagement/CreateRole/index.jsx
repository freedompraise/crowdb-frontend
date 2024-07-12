import {
	Button,
	Form,
	Spinner,
	Alert,
	Row,
	Col,
	FormGroup,
	FormCheck,
} from 'react-bootstrap'
import { useCreateRole } from './CreateRole'

const CreateRole = () => {
	const {
		permissions,
		selectedPermissions,
		setSelectedPermissions,
		roleName,
		setRoleName,
		loading,
		error,
		handleSubmit,
	} = useCreateRole()

	const handlePermissionChange = (permissionId) => {
		if (selectedPermissions.includes(permissionId)) {
			setSelectedPermissions(
				selectedPermissions.filter((id) => id !== permissionId)
			)
		} else {
			setSelectedPermissions([...selectedPermissions, permissionId])
		}
	}

	return (
		<div>
			<h1>Create New Role</h1>
			{loading && <Spinner animation="border" />}
			{error && <Alert variant="danger">{error}</Alert>}
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
					Create Role
				</Button>
			</Form>
		</div>
	)
}

export default CreateRole
