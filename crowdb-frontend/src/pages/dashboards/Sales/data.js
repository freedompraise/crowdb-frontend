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
const PopularProductsData = [
	{
		product: {
			productImage: product1,
			productName: 'CrowdB Camera EDM 5D(White)',
			productID: 'A3652',
		},
		price: {
			originalPrice: 70,
			discountPrice: 50,
		},
		sell: {
			originalPrice: 550,
			sellPrice: 450,
		},
		status: 'Stock',
	},
	{
		product: {
			productImage: product2,
			productName: 'CrowdB Shoes Max-Zon',
			productID: 'A5002',
		},
		price: {
			originalPrice: 150,
			discountPrice: 99,
		},
		sell: {
			originalPrice: 900,
			sellPrice: 750,
		},
		status: 'Out of Stock',
	},
	{
		product: {
			productImage: product4,
			productName: 'CrowdB Mask N99 [ISI]',
			productID: 'A6598',
		},
		price: {
			originalPrice: 250,
			discountPrice: 199,
		},
		sell: {
			originalPrice: 280,
			sellPrice: 220,
		},
		status: 'Stock',
	},
	{
		product: {
			productImage: product5,
			productName: 'CrowdB Bag (Blue)',
			productID: 'A9547',
		},
		price: {
			originalPrice: 49,
			discountPrice: 40,
		},
		sell: {
			originalPrice: 1000,
			sellPrice: 500,
		},
		status: 'Out of Stock',
	},
]
export { WidgetsData, EarningReportData, PopularProductsData }
