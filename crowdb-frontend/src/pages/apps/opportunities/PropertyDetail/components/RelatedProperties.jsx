import { Col, Row } from 'react-bootstrap'
import { relatedPropertiesData } from '../data'
import PropertyCard from '../../Property//components/PropertyCard'

const RelatedProperties = () => {
	return (
		<>
			<Row>
				{relatedPropertiesData.map((property, idx) => (
					<Col md={3} key={idx}>
						<PropertyCard property={property} />
					</Col>
				))}
			</Row>
		</>
	)
}
export default RelatedProperties
