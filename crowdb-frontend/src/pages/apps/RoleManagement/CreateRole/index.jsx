import { Button, Form, Spinner, Alert, Row, Col } from 'react-bootstrap'
import Select from 'react-select'
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
							<Select
								isMulti
								options={permissions.map((perm) => ({
									value: perm.id,
									label: perm.name,
								}))}
								onChange={setSelectedPermissions}
								value={selectedPermissions}
							/>
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
