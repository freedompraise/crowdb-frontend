import { Pagination } from 'react-bootstrap'

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page)
		}
	}

	return (
		<Pagination>
			<Pagination.Prev
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			/>
			{[...Array(totalPages).keys()].map((page) => (
				<Pagination.Item
					key={page + 1}
					active={page + 1 === currentPage}
					onClick={() => handlePageChange(page + 1)}>
					{page + 1}
				</Pagination.Item>
			))}
			<Pagination.Next
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			/>
		</Pagination>
	)
}

export default PaginationComponent
