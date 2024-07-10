import React, { useState } from 'react'
import { Image, Dropdown, Modal, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import house from '@/assets/images/properties/house.jpg'
import { updateSlots, updatePrice, makeVisible, makeInvisible } from './api'

const PropertyTable = ({ properties, onUpdate }) => {
	const [selectedProperty, setSelectedProperty] = useState(null)
	const [showModal, setShowModal] = useState(false)
	const [updateType, setUpdateType] = useState(null)
	const [formData, setFormData] = useState({ slots: '', price: '' })

	const handleOpenModal = (property, type) => {
		setSelectedProperty(property)
		setUpdateType(type)
		setFormData({ slots: property.slots, price: property.price })
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
		setSelectedProperty(null)
		setUpdateType(null)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async () => {
		try {
			if (updateType === 'slots') {
				await updateSlots(selectedProperty.id, formData.slots)
			} else if (updateType === 'price') {
				await updatePrice(selectedProperty.id, formData.price)
			}
			onUpdate()
			handleCloseModal()
		} catch (error) {
			console.error(error.message)
		}
	}

	const handleToggleVisibility = async (property) => {
		try {
			if (property.isVisible) {
				await makeInvisible(property.id)
			} else {
				await makeVisible(property.id)
			}
			onUpdate()
		} catch (error) {
			console.error(error.message)
		}
	}

	return (
		<div className="table-responsive">
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Property Name</th>
						<th>Amenities</th>
						<th>Location</th>
						<th>Slots</th>
						<th>Visibilty</th>
						<th>Size</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{properties.map((property, idx) => (
						<tr key={idx}>
							<td
								style={{
									width: '200px',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
								}}>
								{property.images && property.images.length > 0 ? (
									<Image
										src={property.images[0]}
										height={40}
										style={{
											maxWidth: '40px',
											maxHeight: '40px',
											display: 'inline-block',
										}}
									/>
								) : (
									<Image
										src={house}
										height={40}
										style={{
											maxWidth: '40px',
											maxHeight: '40px',
											display: 'inline-block',
										}}
									/>
								)}
								<p
									className="d-inline-block align-middle mb-0 ms-1"
									style={{
										maxWidth: '150px',
										overflow: 'hidden',
										textOverflow: 'ellipsis',
									}}>
									<Link
										to={`/opportunities/property-detail/${property.id}`}
										className="d-inline-block align-middle mb-0 product-name"
										style={{
											maxWidth: '150px',
											display: 'block',
											whiteSpace: 'nowrap',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
										}}>
										{property.name}
									</Link>
									<br />
									<span className="text-muted font-13">
										{property.currency} {property.price}
									</span>
								</p>
							</td>
							<td>
								{property.amenities ? property.amenities.join(', ') : 'N/A'}
							</td>
							<td>{property.address || 'N/A'}</td>
							<td>{property.slots || 'N/A'}</td>
							<td>
								<span
									className={`badge badge-soft-${property.isVisible ? 'secondary' : 'primary'}`}>
									{property.isVisible ? 'On' : 'Off'}
								</span>
							</td>
							<td>{property.size ? property.size : 'N/A'}</td>
							<td>
								<div className="d-flex justify-content-end">
									<Dropdown>
										<Dropdown.Toggle variant="light" id="dropdown-basic">
											<span className="las la-pen text-secondary fs-5" />
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item
												onClick={() => handleOpenModal(property, 'price')}>
												Update Price
											</Dropdown.Item>
											<Dropdown.Item
												onClick={() => handleOpenModal(property, 'slots')}>
												Update Slots
											</Dropdown.Item>
											<Dropdown.Item
												onClick={() => handleToggleVisibility(property)}>
												{property.isVisible ? 'Hide Property' : 'Show Property'}
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						{updateType === 'slots' ? 'Update Slots' : 'Update Price'}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						{updateType === 'slots' && (
							<Form.Group className="mb-3">
								<Form.Label>Slots</Form.Label>
								<Form.Control
									type="number"
									name="slots"
									value={formData.slots}
									onChange={handleChange}
									min="0"
								/>
							</Form.Group>
						)}
						{updateType === 'price' && (
							<Form.Group className="mb-3">
								<Form.Label>Price</Form.Label>
								<Form.Control
									type="number"
									name="price"
									value={formData.price}
									onChange={handleChange}
									min="0"
								/>
							</Form.Group>
						)}
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSubmit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default PropertyTable
