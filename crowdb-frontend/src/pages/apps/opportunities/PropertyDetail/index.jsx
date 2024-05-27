import { PageBreadcrumb } from '@/components'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { getPropertyData } from './data'
import PropertyDetailCard from './components/PropertyDetailCard'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const PropertyDetail = () => {
	const [propertyData, setPropertyData] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		if (id) {
		getPropertyData(id).then((data
		) => setPropertyData(data))
	}
	},[id])

	if (!propertyData) {
        return <div>Loading...</div>
	}

	return (
		<>
			<PageBreadcrumb subName="Properties" title="Property Cards" />
			<Row>
				<Col xs={12}>
					<PropertyDetailCard propertyData={propertyData} />
				</Col>
			</Row>
		</>
	)
}
export default PropertyDetail
