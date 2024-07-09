import { PageBreadcrumb } from '@/components'
import { Col, Row } from 'react-bootstrap'
import RevenuStatus from './components/RevenuStatus'
import Widget from './components/Widget'
import EarrnigReportChart from './components/EarrnigReportChart'
import WithdrawalReports from './components/WithdrawalReports'
import PopuplarProperties from './components/PopularProperties'
const Sales = () => {
	return (
		<>
			<PageBreadcrumb subName="Dashboard" title="Sales" />
			<Row>
				<Col lg={9}>
					<RevenuStatus />
					<Widget />
				</Col>
				<Col lg={6}>
					<EarrnigReportChart />
				</Col>
			</Row>

			<Row>
				<Col lg={6}>
					<WithdrawalReports />
				</Col>
				<Col lg={6}>
					<PopuplarProperties />
				</Col>
			</Row>
		</>
	)
}
export default Sales
