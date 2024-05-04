import { ComponentContainerCard } from '@/components'
import { EarningReportData } from '../data'
const WithdrawalReports = () => {
	return (
		<ComponentContainerCard title="Withdrawal Frequency">
			<div className="table-responsive">
				<table className="table mb-0">
					<thead className="table-light">
						<tr>
							<th className="border-top-0">Date</th>
							<th className="border-top-0">Number of Withdrawals</th>
							<th className="border-top-0">Change</th>
							<th className="border-top-0">Amount</th>
						</tr>
					</thead>
					<tbody>
						{EarningReportData.map((report, idx) => {
							return (
								<tr key={idx}>
									<td>{report.date}</td>
									<td>{report.itemCount}</td>
									<td className="text-danger">{report.text}</td>
									<td>{report.earnings}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}
export default WithdrawalReports
