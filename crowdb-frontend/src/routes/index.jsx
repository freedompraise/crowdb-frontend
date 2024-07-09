import ChartJs from '@/pages/ui-kit/charts/ChartJs'
import FileUpload from '@/pages/ui-kit/forms/FileUpload'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

//Dashboards
const AnalyticsDashboard = lazy(() => import('@/pages/dashboards/Analytics'))
const SalesDashboard = lazy(() => import('@/pages/dashboards/Sales'))

//Apps
const Chat = lazy(() => import('@/pages/apps/Chat'))
const ContactList = lazy(() => import('@/pages/apps/ContactList'))
const Property = lazy(() => import('@/pages/apps/opportunities/Property'))
const PropertyList = lazy(
	() => import('@/pages/apps/opportunities/PropertyList')
)
const PropertyDetail = lazy(
	() => import('@/pages/apps/opportunities/PropertyDetail')
)
const ListProperty = lazy(
	() => import('@/pages/apps/opportunities/ListProperty')
)
import InviteUser from '@/pages/apps/TeamManagement'
const Login = lazy(() => import('@/pages/authentication/Login'))
const Register = lazy(() => import('@/pages/authentication/Register'))
const RecoverPassword = lazy(
	() => import('@/pages/authentication/RecoverPassword')
)
const Error404 = lazy(() => import('@/pages/authentication/Error404'))
const dashboardRoutes = [
	{
		path: '/',
		name: 'Home Page',
		element: <Navigate to="apps/opportunities/property-list" />,
	},
	{
		path: '/dashboards/analytics',
		name: 'Dashboard',
		element: <AnalyticsDashboard />,
	},
	{
		path: '/dashboards/sales',
		name: 'Sales',
		element: <SalesDashboard />,
	},
]
const appsRoutes = [
	// {
	// 	path: '/apps/chat',
	// 	name: 'Chat',
	// 	element: <Chat />,
	// },
	{
		path: '/users',
		name: 'Cantacts List',
		element: <ContactList />,
	},
	{
		path: '/opportunities/properties',
		name: 'Properties',
		element: <Property />,
	},
	{
		path: '/opportunities/property-list',
		name: 'All Properties',
		element: <PropertyList />,
	},
	{
		path: '/opportunities/property-detail/:id',
		name: 'Property Detail',
		element: <PropertyDetail />,
	},
	{
		path: '/opportunities/create-property',
		name: 'Add Property',
		element: <ListProperty />,
	},
	{
		path: '/team-management/invite-user',
		name: 'Invite User',
		element: <InviteUser />,
	},
]
const authRoutes = [
	{
		path: '/auth/login',
		name: 'Login',
		element: <Login />,
	},
	{
		path: '/auth/register',
		name: 'Register',
		element: <Register />,
	},
	{
		path: '/auth/recover-password',
		name: 'Recover Password',
		element: <RecoverPassword />,
	},
	{
		path: '*',
		name: '404 Error',
		element: <Error404 />,
	},
]

const allAdminRoutes = [...dashboardRoutes, ...appsRoutes]
const allBlankRoutes = [...authRoutes]
export { allAdminRoutes, allBlankRoutes }
