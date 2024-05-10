import {
	FiFilePlus,
	FiGrid,
	FiHome,
	FiLock,
} from 'react-icons/fi'
export const VERTICAL_MENU_ITEMS = [
	{
		key: 'main',
		label: 'Main',
		isTitle: true,
	},
	{
		key: 'dashboard',
		icon: FiHome,
		label: 'Dashboard',
		isTitle: false,
		children: [
			{
				key: 'ds-analytics',
				label: 'Analytics',
				url: '/dashboards/analytics',
				parentKey: 'dashboard',
			},
			{
				key: 'ds-sales',
				label: 'Sales',
				url: '/dashboards/sales',
				parentKey: 'dashboard',
			},
		],
	},
	{
		key: 'apps',
		icon: FiGrid,
		label: 'Apps',
		isTitle: false,
		children: [
			{
				key: 'apps-email',
				label: 'Communication',
				isTitle: false,
				parentKey: 'apps',
				children: [
					{
						key: 'apps-chat',
						label: 'Chat',
						url: '/apps/chat',
						parentKey: 'apps',
					},
					{
						key: 'apps-contact-list',
						label: 'Customer List',
						url: '/apps/contact-list',
						parentKey: 'apps',
					},
				],
			},
			{
				key: 'apps-opportunities',
				label: 'Opportunities',
				isTitle: false,
				parentKey: 'apps',
				children: [
					{
						key: 'opportunities-list',
						label: 'Properties',
						url: '/apps/opportunities/properties',
						parentKey: 'apps-opportunities',
					},
					// {
					// 	key: 'opportunities-property-list',
					// 	label: 'Properties List',
					// 	url: '/apps/opportunities/property-list',
					// 	parentKey: 'apps-opportunities',
					// },
				],
			},
		],
	},
	{
		key: 'auth',
		icon: FiLock,
		label: 'Authentication',
		isTitle: false,
		children: [
			{
				key: 'auth-login',
				label: 'Log In',
				url: '/auth/login',
				parentKey: 'auth',
			},
			{
				key: 'auth-register',
				label: 'Register',
				url: '/auth/register',
				parentKey: 'auth',
			},
			{
				key: 'auth-re-password',
				label: 'Re Password',
				url: '/auth/recover-pw',
				parentKey: 'auth',
			},
			{
				key: 'auth-lock-screen',
				label: 'Lock Screen',
				url: '/auth/lock-screen',
				parentKey: 'auth',
			},
			{
				key: 'auth-error-404',
				label: 'Error 404',
				url: '/auth/auth-404',
				parentKey: 'auth',
			},
			{
				key: 'auth-error-500',
				label: 'Error 500',
				url: '/auth/auth-500',
				parentKey: 'auth',
			},
		],
	},
]
