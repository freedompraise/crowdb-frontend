import { FaRegCircle, FaShoppingBag } from 'react-icons/fa'
import { FiHome, FiMessageSquare, FiUser } from 'react-icons/fi'
export const VERTICAL_MENU_ITEMS = [
	{
		key: 'main',
		label: 'Main',
		isTitle: true,
	},
	{
		key: 'Customers',
		label: 'Customers',
		isTitle: false,
		icon: FiMessageSquare,
		parentKey: 'main',
		children: [
			// {
			// 	key: 'apps-chat',
			// 	label: 'Chat',
			// 	url: '/users',
			// 	parentKey: 'apps',
			// },
			{
				key: 'users',
				label: 'Customer List',
				url: '/users',
				parentKey: 'customers',
			},
		],
	},
	{
		key: 'opportunities',
		label: 'Opportunities',
		icon: FiHome,
		isTitle: false,
		parentKey: 'main',
		children: [
			{
				key: 'opportunities-property-list',
				label: 'All Properties',
				url: '/opportunities/property-list',
				parentKey: 'opportunities',
			},

			{
				key: 'opportunities-create-property',
				label: 'List a Property',
				url: '/opportunities/create-property',
				parentKey: 'opportunities',
			},
		],
	},
	{
		key: 'team-management',
		label: 'Team Management',
		icon: FiUser,
		isTitle: false,
		parentKey: 'main',
		children: [
			{
				key: 'team-management-invite-user',
				label: 'Invite User',
				url: '/team-management/invite-user',
				parentKey: 'team-management',
			},
		],
	},
	{
		key: 'role-management',
		label: 'Role Management',
		icon: FaRegCircle,
		isTitle: false,
		parentKey: 'main',
		children: [
			{
				key: 'role-management-roles',
				label: 'Existing Roles',
				url: '/roles',
				parentKey: 'role-management',
			},
			{
				key: 'role-management-create-role',
				label: 'Create Role',
				url: '/roles/create',
				parentKey: 'role-management',
			},
		],
	},
	{
		key: 'portolio-activity',
		label: 'Portfolio Activity',
		icon: FaShoppingBag,
		isTitle: false,
		parentKey: 'main',
		children: [
			{
				key: 'portolio-transactions',
				label: 'Transactions',
				url: '/portfolio/transactions',
				parentKey: 'portolio-activity',
			},
		],
	},
]
