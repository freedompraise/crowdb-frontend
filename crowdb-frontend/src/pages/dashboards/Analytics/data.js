import { FiActivity, FiBriefcase, FiClock, FiEye } from 'react-icons/fi'
import browser1 from '@/assets/images/browser_logo/chrome.png'
import browser3 from '@/assets/images/browser_logo/in-explorer.png'
import browser2 from '@/assets/images/browser_logo/micro-edge.png'
import browser4 from '@/assets/images/browser_logo/opera.png'
const statisticsData = [
	{
		title: 'Views',
		state: '24k',
		icon: FiEye,
		subTitle: 'Total Views Today',
		change: '8.5',
		variant: 'success',
	},
	{
		title: 'Time Duration',
		state: '00:18',
		icon: FiClock,
		subTitle: 'Avg Time Duration',
		change: '1.5',
		variant: 'success',
	},
	{
		title: 'Bounce Rate',
		state: '$2400',
		icon: FiActivity,
		subTitle: 'Bounce Rate Weekly',
		change: '35',
		variant: 'danger',
	},
	{
		title: 'Conversion Rate',
		state: '23%',
		icon: FiBriefcase,
		subTitle: 'Conversion Rate Monthly',
		change: '10',
		variant: 'success',
	},
]
const userDistribution = [
	{
		name: 'Lagos',
		view: '4.3k',
	},
	{
		name: 'Benin',
		view: '4.3k',
	},
	{
		name: 'Port Harchourt',
		view: '2.9k',
	},
	{
		name: 'Abuja',
		view: '1.6k',
	},
]
const trafficReports = [
	{
		channel: 'Organic search',
		session: {
			state: 10853,
			change: 52,
		},
		prevPeriod: {
			state: 566,
			change: 92,
		},
		change: 52.8,
		variant: 'success',
	},
	{
		channel: 'Direct',
		session: {
			state: 2545,
			change: 47,
		},
		prevPeriod: {
			state: 498,
			change: 81,
		},
		change: 17.2,
		variant: 'danger',
	},
	{
		channel: 'Referal',
		session: {
			state: 1836,
			change: 38,
		},
		prevPeriod: {
			state: 455,
			change: 74,
		},
		change: 41.12,
		variant: 'success',
	},
	{
		channel: 'Email',
		session: {
			state: 1958,
			change: 31,
		},
		prevPeriod: {
			state: 361,
			change: 61,
		},
		change: 8.24,
		variant: 'danger',
	},
	{
		channel: 'Social',
		session: {
			state: 1566,
			change: 26,
		},
		prevPeriod: {
			state: 299,
			change: 49,
		},
		change: 29.33,
		variant: 'success',
	},
]
const browserReports = [
	{
		browser: {
			name: 'Chrome',
			image: browser1,
		},
		session: {
			state: 10853,
			change: 52,
		},
		bounceRate: 52.8,
		Transaction: {
			state: 566,
			change: 92,
		},
	},
	{
		browser: {
			name: 'Microsoft Edge',
			image: browser2,
		},
		session: {
			state: 2545,
			change: 47,
		},
		bounceRate: 47.54,
		Transaction: {
			state: 498,
			change: 81,
		},
	},
	{
		browser: {
			name: 'Internet-Explorer',
			image: browser3,
		},
		session: {
			state: 1836,
			change: 38,
		},
		bounceRate: 41.12,
		Transaction: {
			state: 455,
			change: 74,
		},
	},
	{
		browser: {
			name: 'Opera',
			image: browser4,
		},
		session: {
			state: 1958,
			change: 31,
		},
		bounceRate: 36.82,
		Transaction: {
			state: 361,
			change: 61,
		},
	},
	{
		browser: {
			name: 'Chrome',
			image: browser1,
		},
		session: {
			state: 10853,
			change: 52,
		},
		bounceRate: 52.8,
		Transaction: {
			state: 566,
			change: 92,
		},
	},
]
export { browserReports, userDistribution, statisticsData, trafficReports }
