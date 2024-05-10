import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import AppMenu from './Menu'
import { getMenuItems } from '@/common'
import logoDark from '@/assets/images/logo-dark.png'

const LeftSidebar = () => {
	return (
		<div className="left-sidenav">
			<div className="brand">
				<Link to="/" className="logo">
					<div className="d-flex gap-1 justify-content-center">
						<span>
							<img src={logoDark} alt="logo-dark" className="logo-lg" />
						</span>
					</div>
				</Link>
			</div>
			<SimpleBar className="menu-content h-100">
				<AppMenu menuItems={getMenuItems()} />
			</SimpleBar>
		</div>
	)
}
export default LeftSidebar
