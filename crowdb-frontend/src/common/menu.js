import { FiHome, FiLock, FiMessageSquare, FiUser } from 'react-icons/fi'
export const VERTICAL_MENU_ITEMS = [
	{
		key: 'main',
		label: 'Main',
		isTitle: true,
	},
	{
		key: 'communication',
		label: 'Communication',
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
				parentKey: 'communication',
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
				label: 'Properties List',
				url: '/opportunities/property-list',
				parentKey: 'opportunities',
			},

			{
				key: 'opportunities-create-property',
				label: 'List Property',
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
		icon: FiLock,
		isTitle: false,
		parentKey: 'main',
		children: [
			{
				key: 'role-management-view-roles',
				label: 'View Roles',
				url: '/roles',
				parentKey: 'role-management',
			},
			{
				key: 'role-management-update-role',
				label: 'Update Role',
				url: '/roles/update/',
				parentKey: 'role-management',
			},
		],
	},
]
