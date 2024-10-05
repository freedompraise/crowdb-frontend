import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from 'react-bootstrap'
import { FiPower, FiUser } from 'react-icons/fi'
import { useAuthContext } from '@/context'
import { useNavigate } from 'react-router-dom'
const ProfileDropdown = () => {
	const { removeSession } = useAuthContext()
	const navigate = useNavigate()
	const logout = () => {
		removeSession()
		navigate('/auth/login')
	}
	return (
		<Dropdown as="li">
			<DropdownToggle
				as="a"
				className="nav-link waves-effect waves-light nav-user">
				<span className="ms-1 nav-user-name">Admin</span>
				<i className="mdi mdi-chevron-down"></i>
			</DropdownToggle>
			<DropdownMenu className="dropdown-menu-end">
				{/* <DropdownItem>
					<FiUser className="align-self-center icon-xs icon-dual me-1" />{' '}
					Profile
				</DropdownItem>
				<DropdownItem>
					<FiSettings className="align-self-center icon-xs icon-dual me-1" />{' '}
					Settings
				</DropdownItem>
				<div className="dropdown-divider mb-0"></div> */}
				<DropdownItem onClick={() => logout()}>
					<FiPower className="align-self-center icon-xs icon-dual me-1" />{' '}
					Logout
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
export default ProfileDropdown
