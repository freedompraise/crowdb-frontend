import { ComponentContainerCard } from '@/components'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { userDistribution } from '../data'
const ViewByUsers = () => {
	return (
		<ComponentContainerCard
			title="User Distribution"
			label="Today"
			menuItems={['April', 'May', 'June']}
		>
			<ul className="list-group custom-list-group">
				{userDistribution.map((page, idx) => {
					return (
						<li
							key={idx}
							className="list-group-item align-items-center d-flex justify-content-between"
						>
							<div className="media-body align-self-center">
									<h6 className="m-0">{page.name}</h6>
								</div>
							<div className="align-self-center">
								<Link to="#" className="btn btn-sm btn-soft-primary">
									{page.view} <i className="las la-external-link-alt font-15" />
								</Link>
							</div>
						</li>
					)
				})}
			</ul>
		</ComponentContainerCard>
	)
}
export default ViewByUsers
