import { FaRegCircle, FaShoppingBag } from 'react-icons/fa'
import { FiHome, FiMessageSquare, FiUser } from 'react-icons/fi'
export const VERTICAL_MENU_ITEMS = [
	{
		key: 'main',
		label: 'Main',
		isTitle: true,
	},
	{
		key: 'dashboard',
		label: 'Dashboard',
		url: '/analytics',
		icon: FaRegCircle,
		isTitle: false,
		parentKey: 'main',
	},

	{
		key: 'Customers',
		label: 'Customers',
		isTitle: false,
		icon: FiMessageSquare,
		parentKey: 'main',
		children: [
			{
				key: 'users',
				label: 'Customer List',
				url: '/users',
				parentKey: 'customers',
			},
			{
				key: 'virtual-accounts',
				label: 'Virtual Accounts',
				url: '/virtual-accounts',
				parentKey: 'customers',
			},
			{
				key: 'wallets',
				label: 'Wallets',
				url: '/wallets',
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
		key: 'access-management',
		label: 'Access Management',
		icon: FiUser,
		isTitle: false,
		parentKey: 'main',
		children: [
			{
				key: 'access-management-invite-user',
				label: 'Invite New User',
				url: '/invite-user',
				parentKey: 'access-management',
			},
			{
				key: 'role-management-roles',
				label: 'Manage Roles',
				url: '/roles',
				parentKey: 'access-management',
			},
			{
				key: 'role-management-create-role',
				label: 'Define Role',
				url: '/roles/create',
				parentKey: 'access-management',
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
