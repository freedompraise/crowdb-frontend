import React, { useEffect, useState } from 'react';
import { PageBreadcrumb2 } from '@/components';
import { Col, Image, Row } from 'react-bootstrap';
import { fetchAllProperties } from '../data';
import { Link } from 'react-router-dom';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProperties = async () => {
            try {
                const data = await fetchAllProperties();
                setProperties(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProperties();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <PageBreadcrumb2 appName="Opportunities" title="Properties List" />
            <Row>
                <Col lg={12}>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Property Name</th>
                                    <th>Amenities</th>
                                    <th>Location</th>
                                    <th>Size</th>
                                    <th>Status</th>
                                    <th>Owner</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {properties.map((property, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            {property.images && property.images.length > 0 ? (
                                                <Image src={property.images[0]} height={40} />
                                            ) : (
                                                <Image src="placeholder-image-url" height={40} />
                                            )}
                                            <p className="d-inline-block align-middle mb-0 ms-1">
                                                <Link
                                                    to={`/apps/opportunities/property-detail/${property.id}`}
                                                    className="d-inline-block align-middle mb-0 product-name"
                                                >
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
                                        <td>{property.size || 'N/A'}</td>
                                        <td>
                                            <span
                                                className={`badge badge-soft-${property.status === 'Sale' ? 'pink' : 'purple'}`}
                                            >
                                                {property.status}
                                            </span>
                                        </td>
                                        <td>{property.owner || 'N/A'}</td>
                                        <td>
                                            <Link to="" className="me-1">
                                                <i className="las la-pen text-secondary font-16" />
                                            </Link>
                                            <Link to="#">
                                                <i className="las la-trash-alt text-secondary font-16" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Row>
                        <Col>
                            <Link to="/apps/opportunities/create-property" className="btn btn-outline-light btn-sm px-4">
                                + Add New
                            </Link>
                        </Col>
                        <Col xs="auto">
                            <nav aria-label="...">
                                <ul className="pagination pagination-sm mb-0">
                                    <li className="page-item disabled">
                                        <Link className="page-link" to="#" tabIndex={-1}>
                                            Previous
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link className="page-link" to="#">
                                            1
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            2 <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            3
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            Next
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default PropertyList;
