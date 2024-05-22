import { PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { allProperties } from './data'
import PropertyCard from './components/PropertyCard'

const Property = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Opportunities" title="Properties" />
			<Row>
				{allProperties.slice(0, 4).map((property, idx) => (
					<Col md={3} key={idx}>
						<PropertyCard property={property} />
					</Col>
				))}
			</Row>
			<Row>
				{allProperties.slice(4, 8).map((property, idx) => {
					return (
						<Col md={3} key={idx}>
							<PropertyCard property={property} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}
export default Property
