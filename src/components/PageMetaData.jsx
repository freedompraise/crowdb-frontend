import { Helmet } from 'react-helmet'
const PageMetaData = ({ title }) => {
	return (
		<Helmet>
			<title>{title} | CrowdB - Admin & Dashboard</title>
		</Helmet>
	)
}
export default PageMetaData
