import { Table, Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContactsData } from '../data';
import { SearchBar } from '@/layout/TopNavbar/components';

const Contacts = () => {
  return (
    <Card>
      <SearchBar />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Status</th>
            <th>Amount Invested</th>
			<th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ContactsData.map((contact, idx) => (
            <tr key={idx}>
              <td>{contact.contactID}</td>
              <td>
                <Link to="#">{contact.contactName}</Link>
              </td>
              <td>{contact.userLocation}</td>
              <td>
				{contact.status === 'active'
				? ( <span className='text-success'>{contact.status}</span>) 
				:
				( <span className='text-danger'>{contact.status}</span>
				)}
			  </td>
              <td>{contact.amountIvested}</td>
			  <td>
 				 <Dropdown>
    				<Dropdown.Toggle variant="light" id="dropdown-basic">
    						</Dropdown.Toggle>
    							<Dropdown.Menu>
      								<Dropdown.Item href="#">View Details</Dropdown.Item>
      								<Dropdown.Item href="#">Edit Profile</Dropdown.Item>
      								<Dropdown.Item href="#">Deactivate</Dropdown.Item>
    					</Dropdown.Menu>
  					</Dropdown>
				</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default Contacts;

