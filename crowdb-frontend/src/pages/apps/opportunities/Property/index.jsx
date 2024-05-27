import { PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import PropertyCard from './components/PropertyCard'
import { fetchAllProperties } from '../data'

const Property = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Opportunities" title="Properties" />
			<Row>
				{fetchAllProperties.slice(0, 4).map((property, idx) => (
					<Col md={3} key={idx}>
						<PropertyCard property={property} />
					</Col>
				))}
			</Row>
			{/* <Row>
				{allProperties.slice(4, 8).map((property, idx) => {
					return (
						<Col md={3} key={idx}>
							<PropertyCard property={property} />
						</Col>
					)
				})}
			</Row> */}
		</>
	)
}
export default Property
