import { Col, Row } from 'react-bootstrap'
import { relatedProducts } from '../data'
import PropertyCard from '../../Property//components/PropertyCard'

const RelatedProperties = () => {
	return (
		<>
			<Row>
				{relatedProducts.map((product, idx) => (
					<Col md={3} key={idx}>
						<PropertyCard product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}
export default RelatedProperties
