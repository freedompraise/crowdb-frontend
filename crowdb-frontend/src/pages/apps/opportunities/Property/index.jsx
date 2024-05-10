import { PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { allProperties } from './data'
import PropertyCard from './components/PropertyCard'

const Property = () => {
	return (
		<>
			<PageBreadcrumb2 appName="Ecommerce" title="Products" />
			<Row>
				{allProperties.slice(0, 4).map((product, idx) => (
					<Col md={3} key={idx}>
						<PropertyCard product={product} />
					</Col>
				))}
			</Row>
			<Row>
				{allProperties.slice(4, 8).map((product, idx) => {
					return (
						<Col md={3} key={idx}>
							<PropertyCard product={product} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}
export default Property
