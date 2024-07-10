import React, { useState } from 'react'
import { Dropdown, Modal, Button, Form } from 'react-bootstrap'
import { updateSlots, updatePrice, makeVisible, makeInvisible } from './api'

const PropertyActions = ({ property, onUpdate }) => {
	const [showModal, setShowModal] = useState(false)
	const [updateType, setUpdateType] = useState(null)
	const [formData, setFormData] = useState({
		slots: property.slots,
		price: property.price,
	})
	const [isVisible, setIsVisible] = useState(property.isVisible)

	const handleOpenModal = (type) => {
		setUpdateType(type)
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
		setUpdateType(null)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			if (updateType === 'slots') {
				await updateSlots(property.id, formData.slots)
			} else if (updateType === 'price') {
				await updatePrice(property.id, formData.price)
			}
			onUpdate()
			handleCloseModal()
		} catch (error) {
			console.error(error.message)
		}
	}

	const handleToggleVisibility = async () => {
		setIsVisible((prev) => !prev)
		try {
			if (isVisible) {
				await makeInvisible(property.id)
			} else {
				await makeVisible(property.id)
			}
			onUpdate()
		} catch (error) {
			console.error(error.message)
			setIsVisible((prev) => !prev) // Revert visibility if there was an error
		}
	}

	return (
		<>
			<div className="d-flex justify-content-end">
				<Dropdown>
					<Dropdown.Toggle variant="light" id="dropdown-basic">
						<span className="las la-pen text-secondary fs-5" />
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item onClick={() => handleOpenModal('price')}>
							Update Price
						</Dropdown.Item>
						<Dropdown.Item onClick={() => handleOpenModal('slots')}>
							Update Slots
						</Dropdown.Item>
						<Dropdown.Item onClick={handleToggleVisibility}>
							{isVisible ? 'Hide Property' : 'Show Property'}
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>

			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						{updateType === 'slots' ? 'Update Slots' : 'Update Price'}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
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
						<Modal.Footer>
							<Button variant="secondary" onClick={handleCloseModal}>
								Close
							</Button>
							<Button variant="primary" type="submit">
								Save Changes
							</Button>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default PropertyActions
