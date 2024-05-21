import { Col, Row, Card, CardBody, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ContactsData } from '../data'

const Contacts = () => {
	return (
		<Card>
			{ContactsData.map((contacts, idx) => {
				return (
					<Row lg={2} key={idx}>
						<Card>
							<CardBody>
								<Col>
									<Row>
										<div className="media">
											<Image
												src={contacts.contactUserImg}
												alt="user"
												className="rounded-circle thumb-lg align-self-center"
											/>
											<div className="media-body ms-3 align-self-center">
												<h5 className="mt-0 mb-1">{contacts.contactName}</h5>
												<p className="mb-0 text-muted">{contacts.jobProfile}</p>
											</div>
										</div>
									</Row>
									<div className="col-auto align-self-center">
										<ul className="list-inline mb-0">
											<li className="list-inline-item">
												<Link to="#" className="me-1 contact-icon">
													<i className="fas fa-phone"></i>
												</Link>
												<Link to="#" className="contact-icon">
													<i className="far fa-user"></i>
												</Link>
											</li>
										</ul>
									</div>
								</Col>
							</CardBody>
						</Card>
					</Row>
				)
			})}
		</Card>
	)
}
export default Contacts
