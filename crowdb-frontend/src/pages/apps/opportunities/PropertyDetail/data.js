import property3 from '@/assets/images/products/03.png'
import property4 from '@/assets/images/products/04.png'
import property5 from '@/assets/images/products/05.png'

const features = [
	{
		title: 'Property Type',
		description: 'House',
	},
	{
		title: 'Property ID',
		description: '#123456',
	},
	{
		title: 'Price',
		description: '$200',
	},
	{
		title: 'Status',
		description: 'Sale',
	},
	{
		title: 'Available Slots',
		description: '5',
	},
	{
		title: 'Location',
		description: 'California, USA',
	},
	{
		title: 'Area',
		description: '2000 sqft',
	},
	{
		title: 'Bedrooms',
		description: '3',
	},
	{
		title: 'Bathrooms',
		description: '2',
	},
	{
		title: 'Garages',
		description: '1',
	},
	{
		title: 'Year Built',
		description: '2020',
	},
	{
		title: 'Amenities',
		description: 'Swimming Pool, Gym, Garden',
	},
	{
		title: 'Description',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue varius, eu varius nulla dignissim. Proin non ligula ac tellus semper semper. Nam iaculis vel dolor ac elementum. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue varius, eu varius nulla dignissim. Proin non ligula ac tellus semper semper. Nam iaculis vel dolor ac elementum.',
	},
	
]
const relatedProperties = [
	{
		name: 'Property 1',
		image: property3,
		price: '$200',
		status: 'Sale',
		availableSlots: 5,
	},
	{
		name: 'Property 2',
		image: property4,
		price: '$250',
		status: 'Rent',
		availableSlots: 3,
	},
	{
		name: 'Property 3',
		image: property5,
		price: '$300',
		status: 'Sale',
		availableSlots: 7,
	}
]
export { features, relatedProperties as relatedPropertiesData }
