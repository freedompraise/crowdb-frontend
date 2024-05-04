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
				label: 'Email',
				isTitle: false,
				parentKey: 'apps',
				children: [
					{
						key: 'email-inbox',
						label: 'Inbox',
						url: '/apps/email/inbox',
						parentKey: 'apps-email',
					},
					{
						key: 'email-read',
						label: 'Read Email',
						url: '/apps/email/read',
						parentKey: 'apps-email',
					},
				],
			},
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
			{
				key: 'apps-ecommerce',
				label: 'Ecommerce',
				isTitle: false,
				parentKey: 'apps',
				children: [
					{
						key: 'ecommerce-products',
						label: 'Products',
						url: '/apps/ecommerce/products',
						parentKey: 'apps-ecommerce',
					},
					{
						key: 'ecommerce-product-list',
						label: 'Product List',
						url: '/apps/ecommerce/product-list',
						parentKey: 'apps-ecommerce',
					},
					{
						key: 'ecommerce-product-detail',
						label: 'Product Detail',
						url: '/apps/ecommerce/product-detail',
						parentKey: 'apps-ecommerce',
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
	{
		key: 'pages',
		icon: FiFilePlus,
		label: 'Pages',
		isTitle: false,
		children: [
			{
				key: 'pages-blogs',
				label: 'Blogs',
				url: '/pages/blogs',
				parentKey: 'pages',
			},
			{
				key: 'pages-faqs',
				label: 'FAQs',
				url: '/pages/faqs',
				parentKey: 'pages',
			},
			{
				key: 'pages-pricing',
				label: 'Pricing',
				url: '/pages/pricing',
				parentKey: 'pages',
			},
			{
				key: 'pages-profile',
				label: 'Profile',
				url: '/pages/profile',
				parentKey: 'pages',
			},
			{
				key: 'pages-starter-page',
				label: 'Starter Page',
				url: '/pages/starter',
				parentKey: 'pages',
			},
			{
				key: 'pages-timeline',
				label: 'Timeline',
				url: '/pages/timeline',
				parentKey: 'pages',
			},
			{
				key: 'pages-tree-view',
				label: 'Treeview',
				url: '/pages/treeview',
				parentKey: 'pages',
			},
		],
	},
]
