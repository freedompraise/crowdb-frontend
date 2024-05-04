import product1 from '@/assets/images/products/01.png'
import product2 from '@/assets/images/products/02.png'
import product4 from '@/assets/images/products/04.png'
import product5 from '@/assets/images/products/img-5.png'
const WidgetsData = [
	{
		title: 'WEEKLY SALES',
		count: '24M',
	},
	{
		title: 'ORDERS PLACED',
		count: '520',
	},
	{
		title: 'CONVERSION RATE',
		count: '82.8%',
	},
	{
		title: 'AVG. Wallet Balance',
		count: 'N8M',
	},
]
const EarningReportData = [
	{
		date: '01 January',
		itemCount: 50,
		text: '-N1M',
		earnings: 'N15M',
	},
	{
		date: '02 January',
		itemCount: 70,
		text: '+N2M',
		earnings: 'N16M',
	},
	{
		date: '03 January',
		itemCount: 90,
		text: '+3M',
		earnings: 'N17M',
	},
	{
		date: '04 January',
		itemCount: 60,
		text: '-N4M',
		earnings: 'N18M',
	},
	{
		date: '05 January',
		itemCount: 50,
		text: '-N5M',
		earnings: 'N19M',
	},
	{
		date: '06 January',
		itemCount: 70,
		text: '+N6M',
		earnings: 'N20M',
	},
]
const PopularPropertiesData = [
	{
		property: {
			propertyImage: product1,
			propertyName: '3 BHK Flat',
			propertyID: 'P001',
		},
		price: {
			discountPrice: 'N30M',
			originalPrice: 'N35M',
		},
		totalViews: 120,
		applications: 10,
		
	},
	{
		property: {
			propertyImage: product2,
			propertyName: '2 BHK Flat',
			propertyID: 'P002',
		},
		price: {
			discountPrice: 'N20M',
			originalPrice: 'N25M',
		},
		totalViews: 100,
		applications: 8,
	},
	{
		property: {
			propertyImage: product4,
			propertyName: '4 BHK Flat',
			propertyID: 'P004',
		},
		price: {
			discountPrice: 'N40M',
			originalPrice: 'N45M',
		},
		totalViews: 150,
		applications: 12,
	},
	{
		property: {
			propertyImage: product5,
			propertyName: '1 BHK Flat',
			propertyID: 'P005',
		},
		price: {
			discountPrice: 'N10M',
			originalPrice: 'N15M',
		},
		totalViews: 80,
		applications: 6,
	
			
	},
	
]
export { WidgetsData, EarningReportData, PopularPropertiesData }
