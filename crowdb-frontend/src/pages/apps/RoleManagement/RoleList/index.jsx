import { Table, Button, Spinner, Alert, Dropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useRoleList } from './useRoleList'

const RoleList = () => {
	const { roles, loading, error, handleDelete } = useRoleList()
	const navigate = useNavigate()

	if (loading) return <Spinner animation="border" />
	if (error) return <Alert variant="danger">{error}</Alert>

	return (
		<div>
			<h1>Roles</h1>
			<Link to="/roles/create" className="btn btn-primary mb-3">
				Create New Role
			</Link>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Permissions</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{roles.map((role) => (
						<tr key={role.id}>
							<td>{role.id}</td>
							<td>{role.name}</td>
							<td>{role.permissions.join(', ')}</td>
							<td>
								<Dropdown>
									<Dropdown.Toggle variant="primary" id="dropdown-basic">
										<span className="las la-ellipsis-v fs-5" />
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item
											onClick={() => navigate(`/roles/${role.id}`)}>
											View
										</Dropdown.Item>
										<Dropdown.Item onClick={() => handleDelete(role.id)}>
											Delete
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	)
}

export default RoleList
