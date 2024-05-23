import React, { useState } from 'react';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import { PageBreadcrumb2 } from '@/components';
import { createProperty, defaultFormData } from './api'; 
import { FileUploader } from '@/components/FileUploader';
import CreatableSelect from 'react-select/creatable';

const ListProperty = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      setFormData({ ...formData, images: [...formData.images, ...files] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({}); // Clear previous errors
    setIsSubmitting(true);

    try {
      const response = await createProperty(formData);
      console.log('Property created successfully:', response);
      // Handle successful creation (e.g., redirect to list page)
    } catch (error) {
      console.error('Error creating property:', error);
      setErrors(error.response?.data || { message: 'An error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageBreadcrumb2 appName={"Opportunities"} title={"Create Property"} />
      <Card>
        <Card.Header>Create Property</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <Form.Group as={Row} controlId="formNameDescription">
              <Col sm={6}>
                <Form.Group controlId="formName">
                  <Form.Label>
                    Name
                  </Form.Label>
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                  {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formDescription">
                  <Form.Label>
                    Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                  {errors.description && <Form.Text className="text-danger">{errors.description}</Form.Text>}
                </Form.Group>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={6}>
                <Form.Group controlId="formSlots">
                  <Form.Label>
                    Slots
                  </Form.Label>
                  <Form.Control type="number" name="slots" value={formData.slots} onChange={handleChange} required />
                  {errors.slots && <Form.Text className="text-danger">{errors.slots}</Form.Text>}
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formMarketValue">
                  <Form.Label>
                    Market Value
                  </Form.Label>
                  <Form.Control type="number" name="marketValue" value={formData.marketValue} onChange={handleChange} required />
                  {errors.marketValue && <Form.Text className="text-danger">{errors.marketValue}</Form.Text>}
                </Form.Group>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={4}>
                <Form.Group controlId="formCurrency">
                  <Form.Label>
                    Currency
                  </Form.Label>
                  <Form.Control type="text" name="currency" value={formData.currency} onChange={handleChange} required />
                  {errors.currency && <Form.Text className="text-danger">{errors.currency}</Form.Text>}
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group controlId="formSizeSqft">
                  <Form.Label>
                    Size (Sqft)
                  </Form.Label>
                  <Form.Control type="text" name="sizeSqft" value={formData.sizeSqft} onChange={handleChange} required />
                  {errors.sizeSqft && <Form.Text className="text-danger">{errors.sizeSqft}</Form.Text>}
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group controlId="formZipCode">
                  <Form.Label>
                    Zip Code
                  </Form.Label>
                  <Form.Control type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                  {errors.zipCode && <Form.Text className="text-danger">{errors.zipCode}</Form.Text>}
                </Form.Group>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={6}>
                <Form.Group controlId="formAddress">
                  <Form.Label>
                    Address
                  </Form.Label>
                  <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
                  {errors.address && <Form.Text className="text-danger">{errors.address}</Form.Text>}
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formOwner">
                  <Form.Label>
                    Owner
                  </Form.Label>
                  <Form.Control type="text" name="owner" value={formData.owner} onChange={handleChange} required />
                  {errors.owner && <Form.Text className="text-danger">{errors.owner}</Form.Text>}
                </Form.Group>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={4}>
                <Form.Group controlId="formPreviousOwners">
                  <Form.Label>
                    Previous Owners
                  </Form.Label>
                  <Form.Control type="text" name="previousOwners" value={formData.previousOwners} onChange={handleChange} />
                  {errors.previousOwners && <Form.Text className="text-danger">{errors.previousOwners}</Form.Text>}
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group controlId="formVoteOptions">
                  <Form.Label>
                    Vote Options
                  </Form.Label>
                  <Form.Control type="text" name="voteOptions" value={formData.voteOptions} onChange={handleChange} required />
                  {errors.voteOptions && <Form.Text className="text-danger">{errors.voteOptions}</Form.Text>}
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group controlId="formAmenities">
                  <Form.Label>
                    Amenities
                  </Form.Label>
                 <CreatableSelect
                    isMulti
                    placeholder = "Select or type amenities"
                    options={formData.amenities}
                  />
                </Form.Group>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formImages">
              <Form.Label column sm={6}>
                Images
              </Form.Label>
              <Col sm={10}>
                <FileUploader text={"Drop files here or click to upload."} />
              </Col>
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Property'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListProperty;
