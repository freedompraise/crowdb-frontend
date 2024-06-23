import { useState } from 'react'
import { Form, Col, Row, Button, Card } from 'react-bootstrap'
import { PageBreadcrumb2 } from '@/components'
import { createProperty, defaultFormData } from './api'
import CreatableSelect from 'react-select/creatable'
import { useNavigate } from 'react-router-dom'
import { FiUploadCloud } from 'react-icons/fi'
import { FileUploader } from '@/components/FileUploader'

const ListProperty = () => {
	const navigate = useNavigate()
	const [formData, setFormData] = useState(defaultFormData)
	const [errors, setErrors] = useState({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_URL

	const handleChange = (event) => {
		const { name, value, files } = event.target
		if (files) {
			setFormData({ ...formData, images: [...formData.images, ...files] })
		} else {
			setFormData({ ...formData, [name]: value })
		}
	}

	const handleAmenitiesChange = (selectedOptions) => {
		setFormData({
			...formData,
			amenities: selectedOptions.map((option) => option.value),
		})
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setIsSubmitting(true)
		const propertyData = new FormData()

		for (const key in formData) {
			if (key === 'images') {
				formData.images.forEach((image) => {
					propertyData.append('images', image.url)
				})
			} else if (Array.isArray(formData[key])) {
				formData[key].forEach((item) => {
					propertyData.append(key, item)
				})
			} else {
				propertyData.append(key, formData[key])
			}
		}
		try {
			const response = await createProperty(propertyData)
			console.log('The property was created successfully!', response)
			// navigate('/apps/opportunities/property-list')
		} catch (error) {
			console.error('Error creating property:', error)
			setErrors({ ...errors, createProperty: error.message })
		}
		setIsSubmitting(false)
	}

	return (
		<>
			<PageBreadcrumb2 appName={'Opportunities'} title={'Create Property'} />
			<Card>
				<Card.Header>Create Property</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group as={Row} controlId="formNameDescription">
							<Col sm={6}>
								<Form.Group controlId="formName">
									<Form.Label className="fw-bold">Name</Form.Label>
									<Form.Control
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Enter property name"
										required
									/>
									{errors.name && (
										<Form.Text className="text-danger">{errors.name}</Form.Text>
									)}
								</Form.Group>
							</Col>
							<Col sm={6}>
								<Form.Group controlId="formDescription">
									<Form.Label className="fw-bold">Description</Form.Label>
									<Form.Control
										as="textarea"
										rows={3}
										name="description"
										value={formData.description}
										onChange={handleChange}
										placeholder="Enter property description"
										required
									/>
									{errors.description && (
										<Form.Text className="text-danger">
											{errors.description}
										</Form.Text>
									)}
								</Form.Group>
							</Col>
						</Form.Group>

						<Form.Group as={Row}>
							<Col sm={4}>
								<Form.Group controlId="formSlots">
									<Form.Label className="fw-bold">Slots</Form.Label>
									<Form.Control
										type="number"
										name="slots"
										value={formData.slots}
										onChange={handleChange}
										placeholder="Enter number of slots"
										required
									/>
									{errors.slots && (
										<Form.Text className="text-danger">
											{errors.slots}
										</Form.Text>
									)}
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group controlId="formPrice">
									<Form.Label className="fw-bold">Market Value</Form.Label>
									<Form.Control
										type="number"
										name="price"
										value={formData.price}
										onChange={handleChange}
										placeholder="Enter market value"
										required
									/>
									{errors.price && (
										<Form.Text className="text-danger">
											{errors.price}
										</Form.Text>
									)}
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group controlId="formAddress">
									<Form.Label className="fw-bold">Address</Form.Label>
									<Form.Control
										type="text"
										name="address"
										value={formData.address}
										onChange={handleChange}
										placeholder="Enter address"
									/>
									{errors.address && (
										<Form.Text className="text-danger">
											{errors.address}
										</Form.Text>
									)}
								</Form.Group>
							</Col>
						</Form.Group>

						<Form.Group as={Row}>
							<Col sm={4}>
								<Form.Group controlId="formCurrency">
									<Form.Label className="fw-bold">Currency</Form.Label>
									<Form.Control
										type="text"
										name="currency"
										value={formData.currency}
										placeholder="Enter currency"
										required
									/>
									{errors.currency && (
										<Form.Text className="text-danger">
											{errors.currency}
										</Form.Text>
									)}
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group controlId="formSize">
									<Form.Label className="fw-bold">Size (Sqft)</Form.Label>
									<Form.Control
										type="text"
										name="size"
										value={formData.size}
										onChange={handleChange}
										placeholder="Enter size in sqft"
									/>
									{errors.size && (
										<Form.Text className="text-danger">{errors.size}</Form.Text>
									)}
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group controlId="formZipCode">
									<Form.Label className="fw-bold">Zip Code</Form.Label>
									<Form.Control
										type="text"
										name="zipcode"
										value={formData.zipcode}
										onChange={handleChange}
										placeholder="Enter zip code"
									/>
									{errors.zipcode && (
										<Form.Text className="text-danger">
											{errors.zipcode}
										</Form.Text>
									)}
								</Form.Group>
							</Col>
						</Form.Group>

						<Form.Group as={Row}>
							<Col sm={4}>
								<Form.Group controlId="formVoteOptions">
									<Form.Label className="fw-bold">Vote Options</Form.Label>
									<Form.Control
										type="text"
										name="voteOptions"
										value={formData.voteOptions}
										placeholder="Enter vote options"
									/>
									{errors.voteOptions && (
										<Form.Text className="text-danger">
											{errors.voteOptions}
										</Form.Text>
									)}
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group controlId="formAmenities">
									<Form.Label className="fw-bold">Amenities</Form.Label>
									<CreatableSelect
										isMulti
										onChange={handleAmenitiesChange}
										options={formData.amenities.map((amenity) => ({
											value: amenity,
											label: amenity,
										}))}
										placeholder="Select or type amenities"
									/>
									{errors.amenities && (
										<Form.Text className="text-danger">
											{errors.amenities}
										</Form.Text>
									)}
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group controlId="formOwner">
									<Form.Label className="fw-bold">Owner</Form.Label>
									<Form.Control
										type="text"
										name="owner"
										value={formData.owner}
										onChange={handleChange}
										placeholder="Enter owner's name"
									/>
									{errors.owner && (
										<Form.Text className="text-danger">
											{errors.owner}
										</Form.Text>
									)}
								</Form.Group>
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formImages">
							<Form.Label className="fw-bold" column sm={6}>
								Images
							</Form.Label>
							<Col sm={10}>
								<FileUploader
									icon={FiUploadCloud}
									text={'Drop files here or click to upload.'}
									onChange={handleChange}
								/>
							</Col>
						</Form.Group>

						<Button type="submit" disabled={isSubmitting}>
							{isSubmitting ? 'Creating...' : 'Create Property'}
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</>
	)
}

export default ListProperty
