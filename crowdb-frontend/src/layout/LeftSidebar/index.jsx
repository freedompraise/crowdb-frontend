import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import AppMenu from './Menu'
import { getMenuItems } from '@/common'
import logoSm from '@/assets/images/logo-sm.png'

const LeftSidebar = () => {
	return (
		<div className="left-sidenav">
			<div className="brand">
				<Link to="/" className="logo">
					<div className="d-flex justify-content-center">
						<span>
							<img
								src={logoSm}
								alt="logo-dark"
								className="logo-lg img-fluid"
								style={{ width: '130px', height: 'auto' }}
							/>
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
