import { PageBreadcrumb2 } from '@/components'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import { users } from './data'
import UsersChat from './components/UsersChat'
import ChatArea from './components/ChatArea'
const Chat = () => {
	const [selectedUser, setSelectedUser] = useState(users[1])
	/**
	 * On user change
	 */
	const onUserChange = (user) => {
		setSelectedUser(user)
	}
	return (
		<>
			<PageBreadcrumb2 title="Chat" appName="Apps" />
			<Row>
				<Col xs={12}>
					<UsersChat onUserSelect={onUserChange} />

					<ChatArea selectedUser={selectedUser} />
				</Col>
			</Row>
		</>
	)
}
export default Chat
