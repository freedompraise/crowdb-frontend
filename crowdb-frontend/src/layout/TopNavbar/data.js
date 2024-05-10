import { FiCheckCircle, FiShoppingCart, FiUser } from 'react-icons/fi'
/**
 * for subtraction minutes
 */
function subtractHours(date, minutes) {
	date.setMinutes(date.getMinutes() - minutes)
	return date
}
const notifications = [
	{
		title: 'New Order Recieved',
		description: '1 order from John Doe',
		createdAt: subtractHours(new Date(), 2),
		icon: FiShoppingCart,
	},
	{
		title: 'New User Registered',
		description: '1 user registered',
		createdAt: subtractHours(new Date(), 4),
		icon: FiUser,
	},
	{
		title: 'New Property Listed',
		description: '1 property listed by Jane Doe',
		createdAt: subtractHours(new Date(), 6),
		icon: FiCheckCircle,
	},
	{
		title: 'New Group Created',
		description: '1 group created by Lucy Peterson',
		createdAt: subtractHours(new Date(), 8),
		icon: FiCheckCircle,
	}
	
]
export { notifications }
