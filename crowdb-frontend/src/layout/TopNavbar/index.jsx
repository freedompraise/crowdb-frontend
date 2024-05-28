import { FiMenu } from 'react-icons/fi'
import { Button, NavLink } from 'react-bootstrap'
import { useThemeContext } from '@/context'
import { Notifications, ProfileDropdown} from './components'
import { notifications } from './data'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
	const { settings, updateSideNavMode } = useThemeContext()
	const handleLeftMenuCallBack = () => {
		if (settings.sideNavMode == 'default') {
			updateSideNavMode('sm')
		} else {
			updateSideNavMode('default')
		}
	}
	return (
		<>
			<div className="topbar">
				<nav className="navbar-custom">
					<ul className="list-unstyled topbar-nav float-end mb-0">
						{/* <SearchBar /> */}
						<ProfileDropdown />
						<Notifications notifications={notifications} />
					</ul>
					<ul className="list-unstyled topbar-nav mb-0">
						<li>
							<button
								className="nav-link button-menu-mobile"
								onClick={handleLeftMenuCallBack}
							>
								<FiMenu className="align-self-center topbar-icon" />
							</button>
						</li>
						<li className="creat-btn">
							<NavLink>
								<Link 
								to="/apps/opportunities/create-property" 
								 variant="soft-primary" size="sm" role="button">
									<i className="fas fa-plus me-2"></i>New Property
								</Link>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}
export default TopNavbar
