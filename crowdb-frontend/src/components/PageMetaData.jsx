import { Helmet } from 'react-helmet'
const PageMetaData = ({ title }) => {
	return (
		<Helmet>
			<title>{title} | Dastone - Admin & Dashboard Template</title>
		</Helmet>
	)
}
export default PageMetaData
