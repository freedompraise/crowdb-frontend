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
const RecoverPW = lazy(() => import('@/pages/authentication/RecoverPW'))
const Lockscreen = lazy(() => import('@/pages/authentication/LockScreen'))
const Error404 = lazy(() => import('@/pages/authentication/Error404'))
const Error500 = lazy(() => import('@/pages/authentication/Error500'))
const Blogs = lazy(() => import('@/pages/pages/Blogs'))
const FAQs = lazy(() => import('@/pages/pages/FAQs'))
const Pricing = lazy(() => import('@/pages/pages/Pricing'))
const Starter = lazy(() => import('@/pages/pages/Starter'))
const Timeline = lazy(() => import('@/pages/pages/Timeline'))
const Treeview = lazy(() => import('@/pages/pages/Treeview'))
const Profile = lazy(() => import('@/pages/pages/Profile'))
const AlertEmail = lazy(
	() => import('@/pages/ui-kit/email-templates/AlertEmail')
)
const ActionEmail = lazy(
	() => import('@/pages/ui-kit/email-templates/ActionEmail')
)
const BillingEmail = lazy(
	() => import('@/pages/ui-kit/email-templates/BillingEmail')
)
const GoogleMaps = lazy(() => import('@/pages/ui-kit/maps/GoogleMaps'))
const VectorMaps = lazy(() => import('@/pages/ui-kit/maps/VectorMap'))
const LeafletMaps = lazy(() => import('@/pages/ui-kit/maps/LeafletMaps'))
const Alerts = lazy(() => import('@/pages/ui-kit/elements/Alerts'))
const Avatars = lazy(() => import('@/pages/ui-kit/elements/Avatars'))
const Buttons = lazy(() => import('@/pages/ui-kit/elements/Buttons'))
const Badges = lazy(() => import('@/pages/ui-kit/elements/Badges'))
const Cards = lazy(() => import('@/pages/ui-kit/elements/Cards'))
const Carousels = lazy(() => import('@/pages/ui-kit/elements/Carousels'))
const CheckRadio = lazy(() => import('@/pages/ui-kit/elements/Check&Radio'))
const Dropdowns = lazy(() => import('@/pages/ui-kit/elements/Dropdowns'))
const Grids = lazy(() => import('@/pages/ui-kit/elements/Grids'))
const Images = lazy(() => import('@/pages/ui-kit/elements/Images'))
const List = lazy(() => import('@/pages/ui-kit/elements/List'))
const Modals = lazy(() => import('@/pages/ui-kit/elements/Modals'))
const Navs = lazy(() => import('@/pages/ui-kit/elements/Navs'))
const Navbar = lazy(() => import('@/pages/ui-kit/elements/Navbar'))
const Offcanvas = lazy(() => import('@/pages/ui-kit/elements/Offcanvas'))
const Paginations = lazy(() => import('@/pages/ui-kit/elements/Paginations'))
const Progress = lazy(() => import('@/pages/ui-kit/elements/Progress'))
const PopoverTooltip = lazy(
	() => import('@/pages/ui-kit/elements/PopoverTooltip')
)
const Spinners = lazy(() => import('@/pages/ui-kit/elements/Spinners'))
const TabsAndAccordions = lazy(
	() => import('@/pages/ui-kit/elements/TabsAndAccordions')
)
const Apex = lazy(() => import('@/pages/ui-kit/charts/Apex'))
const Toasts = lazy(() => import('@/pages/ui-kit/elements/Toasts'))
const Typography = lazy(() => import('@/pages/ui-kit/elements/Typography'))
const Videos = lazy(() => import('@/pages/ui-kit/elements/Videos'))
const Elements = lazy(() => import('@/pages/ui-kit/forms/FormsElements'))
const AdvancedElements = lazy(
	() => import('@/pages/ui-kit/forms/AdvancedElements')
)
const Editors = lazy(() => import('@/pages/ui-kit/forms/Editors'))
const Validation = lazy(() => import('@/pages/ui-kit/forms/Validation'))
const Repeater = lazy(() => import('@/pages/ui-kit/forms/Repeater'))
const Wizard = lazy(() => import('@/pages/ui-kit/forms/Wizard'))
const XEditable = lazy(() => import('@/pages/ui-kit/forms/XEditable'))

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
	{
		path: '/apps/chat',
		name: 'Chat',
		element: <Chat />,
	},
	{
		path: '/apps/contact-list',
		name: 'Cantacts List',
		element: <ContactList />,
	},
	{
		path: '/apps/opportunities/properties',
		name: 'Properties',
		element: <Property />,
	},
	{
		path: '/apps/opportunities/property-list',
		name: 'Property List',
		element: <PropertyList />,
	},
	{
		path: '/apps/opportunities/property-detail/:id',
		name: 'Property Detail',
		element: <PropertyDetail />,
	},
	{
		path: '/apps/opportunities/create-property',
		name: 'Add Property',
		element: <ListProperty />,
	},
	{
		path: '/apps/team-management/invite-user',
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
		path: '/auth/recover-pw',
		name: 'Recover PW',
		element: <RecoverPW />,
	},
	{
		path: '/auth/lock-screen',
		name: 'Lockscreen',
		element: <Lockscreen />,
	},
	{
		path: '/auth/auth-404',
		name: '404 Error',
		element: <Error404 />,
	},
	{
		path: '/auth/auth-500',
		name: '500 Error',
		element: <Error500 />,
	},
	{
		path: '*',
		name: '404 Error',
		element: <Error404 />,
	},
]
const pagesRoutes = [
	{
		path: '/pages/blogs',
		name: 'Blogs',
		element: <Blogs />,
	},
	{
		path: '/pages/faqs',
		name: 'FAQs',
		element: <FAQs />,
	},
	{
		path: '/pages/pricing',
		name: 'Pricing',
		element: <Pricing />,
	},
	{
		path: '/pages/starter',
		name: 'Starter Pages',
		element: <Starter />,
	},
	{
		path: '/pages/timeline',
		name: 'Timeline',
		element: <Timeline />,
	},
	{
		path: '/pages/treeview',
		name: 'Treeview',
		element: <Treeview />,
	},
	{
		path: '/pages/profile',
		name: 'Profile',
		element: <Profile />,
	},
]
const mapsRoutes = [
	{
		path: '/ui/email-templates/basic',
		name: 'Email Basic',
		element: <ActionEmail />,
	},
	{
		path: '/ui/email-templates/alert',
		name: 'Email Alert',
		element: <AlertEmail />,
	},
	{
		path: '/ui/email-templates/billing',
		name: 'Email Billing',
		element: <BillingEmail />,
	},
	{
		path: '/ui/maps/google',
		name: 'Google Maps',
		element: <GoogleMaps />,
	},
	{
		path: '/ui/maps/vector',
		name: 'Vector Maps',
		element: <VectorMaps />,
	},
	{
		path: '/ui/maps/leaflet',
		name: 'Leaflet Maps',
		element: <LeafletMaps />,
	},
]
const uiRoutes = [
	{
		path: '/ui/elements/alerts',
		name: 'Alerts',
		element: <Alerts />,
	},
	{
		path: '/ui/elements/avatars',
		name: 'Avatars',
		element: <Avatars />,
	},
	{
		path: '/ui/elements/buttons',
		name: 'Buttons',
		element: <Buttons />,
	},
	{
		path: '/ui/elements/badges',
		name: 'Badges',
		element: <Badges />,
	},
	{
		path: '/ui/elements/cards',
		name: 'Cards',
		element: <Cards />,
	},
	{
		path: '/ui/elements/carousels',
		name: 'Carousels',
		element: <Carousels />,
	},
	{
		path: '/ui/elements/check-radio',
		name: 'Check & Radio',
		element: <CheckRadio />,
	},
	{
		path: '/ui/elements/dropdowns',
		name: 'Dropdowns',
		element: <Dropdowns />,
	},
	{
		path: '/ui/elements/grids',
		name: 'Grids',
		element: <Grids />,
	},
	{
		path: '/ui/elements/images',
		name: 'Images',
		element: <Images />,
	},
	{
		path: '/ui/elements/list',
		name: 'List',
		element: <List />,
	},
	{
		path: '/ui/charts/chartjs',
		name: 'Chart',
		element: <ChartJs />,
	},
	{
		path: '/ui/charts/apex',
		name: 'Apex',
		element: <Apex />,
	},
	{
		path: '/ui/elements/modals',
		name: 'Modals',
		element: <Modals />,
	},
	{
		path: '/ui/elements/navs',
		name: 'Navs',
		element: <Navs />,
	},
	{
		path: '/ui/elements/navbar',
		name: 'Navbar',
		element: <Navbar />,
	},
	{
		path: '/ui/elements/offcanvas',
		name: 'Offcanvas',
		element: <Offcanvas />,
	},
	{
		path: '/ui/elements/paginations',
		name: 'Paginations',
		element: <Paginations />,
	},
	{
		path: '/ui/elements/popover-tooltip',
		name: 'Popover & Tooltip',
		element: <PopoverTooltip />,
	},
	{
		path: '/ui/elements/progress',
		name: 'Progress',
		element: <Progress />,
	},
	{
		path: '/ui/elements/spinners',
		name: 'Spinners',
		element: <Spinners />,
	},
	{
		path: '/ui/elements/tabs-accordions',
		name: 'Tabs And Accordion',
		element: <TabsAndAccordions />,
	},
	{
		path: '/ui/elements/toasts',
		name: 'Toasts',
		element: <Toasts />,
	},
	{
		path: '/ui/elements/typography',
		name: 'Typography',
		element: <Typography />,
	},
	{
		path: '/ui/elements/videos',
		name: 'Videos',
		element: <Videos />,
	},
]

const formsRoutes = [
	{
		path: '/ui/forms/advance',
		name: 'Advance Elements',
		element: <AdvancedElements />,
	},
	{
		path: '/ui/forms/elements',
		name: 'Form Elements',
		element: <Elements />,
	},
	{
		path: '/ui/forms/editors',
		name: 'Editors',
		element: <Editors />,
	},
	{
		path: '/ui/forms/validation',
		name: 'Validation',
		element: <Validation />,
	},
	{
		path: '/ui/forms/repeater',
		name: 'Repeater',
		element: <Repeater />,
	},
	{
		path: '/ui/forms/wizard',
		name: 'Wizard',
		element: <Wizard />,
	},
	{
		path: '/ui/forms/xeditable',
		name: 'X Editable',
		element: <XEditable />,
	},
	{
		path: '/ui/forms/file-upload',
		name: 'File Upload',
		element: <FileUpload />,
	},
]

const allUiRoutes = [...uiRoutes, ...mapsRoutes, ...formsRoutes]
const allAdminRoutes = [
	...dashboardRoutes,
	...appsRoutes,
	...pagesRoutes,
	...allUiRoutes,
]
const allBlankRoutes = [...authRoutes]
export { allAdminRoutes, allBlankRoutes }
