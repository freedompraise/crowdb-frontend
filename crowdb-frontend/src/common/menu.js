import { icon } from 'leaflet'
import {
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
	// {
	// 	key: 'dashboard',
	// 	icon: FiHome,
	// 	label: 'Dashboard',
	// 	isTitle: false,
	// 	children: [
	// 		{
	// 			key: 'ds-analytics',
	// 			label: 'Analytics',
	// 			url: '/dashboards/analytics',
	// 			parentKey: 'dashboard',
	// 		},
	// 		{
	// 			key: 'ds-sales',
	// 			label: 'Sales',
	// 			url: '/dashboards/sales',
	// 			parentKey: 'dashboard',
	// 		},
	// 	],
	// },
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
				icon: FiHome,
				isTitle: false,
				parentKey: 'apps',
				children: [
					{
						key: 'opportunities-property-list',
						label: 'Properties List',
						url: '/apps/opportunities/property-list',
						parentKey: 'apps-opportunities',
					},
					
					{
						key: 'opportunities-create-property',
						label: 'Add Property',
						url: '/apps/opportunities/create-property',
						parentKey: 'apps-opportunities',
					},
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
		],
		
	},


	// {
	// 	key: 'ui',
	// 	label: 'UI Elements',
	// 	isTitle: true,
	// },
	// {
	// 	key: 'forms',
	// 	icon: FiGrid,
	// 	label: 'Forms',
	// 	isTitle: false,
	// 	children: [
	// 		{
	// 			key: 'forms-repeater',
	// 			label: 'Repeater',
	// 			url: '/ui/forms/repeater',
	// 			parentKey: 'forms',
	// 		},
	// 		{
	// 			key: 'forms-wizard',
	// 			label: 'Wizard',
	// 			url: '/ui/forms/wizard',
	// 			parentKey: 'forms',
	// 		},
	// 		{
	// 			key: 'forms-validation',
	// 			label: 'Validation',
	// 			url: '/ui/forms/validation',
	// 			parentKey: 'forms',
	// 		},
	// 		{
	// 			key: 'forms-xeditable',
	// 			label: 'X Editable',
	// 			url: '/ui/forms/xeditable',
	// 			parentKey: 'forms',
	// 		},
	// 		{
	// 			key: 'forms-advance',
	// 			label: 'Advance Elements',
	// 			url: '/ui/forms/advance',
	// 			parentKey: 'forms',
	// 		},
	// 		{
	// 			key: 'forms-elements',
	// 			label: 'Form Elements',
	// 			url: '/ui/forms/elements',
	// 			parentKey: 'forms',
	// 		},
	// 		{
	// 			key: 'forms-editors',
	// 			label: 'Editors',
	// 			url: '/ui/forms/editors',
	// 			parentKey: 'forms',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'tables',
	// 	icon: FiGrid,
	// 	label: 'Tables',
	// 	isTitle: false,
	// 	children: [
	// 		{
	// 			key: 'tables-basic',
	// 			label: 'Basic',
	// 			url: '/ui/tables/basic',
	// 			parentKey: 'tables',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'modals',
	// 	icon: FiGrid,
	// 	label: 'Modals',
	// 	isTitle: false,
	// 	children: [
	// 		{
	// 			key: 'modals-basic',
	// 			label: 'Basic',
	// 			url: '/ui/modals/basic',
	// 			parentKey: 'modals',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'icons',
	// 	icon: FiGrid,
	// 	label: 'Icons',
	// 	isTitle: false,
	// 	children: [
	// 		{
	// 			key: 'icons-feather',
	// 			label: 'Feather',
	// 			url: '/ui/icons/feather',
	// 			parentKey: 'icons',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'maps',
	// 	icon: FiGrid,
	// 	label: 'Maps',
	// 	isTitle: false,
	// 	children: [
	// 		{
	// 			key: 'maps-google',
	// 			label: 'Google',
	// 			url: '/ui/maps/google',
	// 			parentKey: 'maps',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'charts',
	// 	icon: FiGrid,
	// 	label: 'Charts',
	// 	isTitle: false,
	// 	children: [
	// 		{
	// 			key: 'charts-chartjs',
	// 			label: 'Chartjs',
	// 			url: '/ui/charts/chartjs',
	// 			parentKey: 'charts',
	// 		},
	// 	],
	// },
	// {
	// 	key: 'pages',
	// 	label: 'Pages',
	// 	isTitle: true,
	// },
]
