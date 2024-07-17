export const customStyles = {
	control: (provided) => ({
		...provided,
		backgroundColor: '#343a40',
		color: '#ffffff',
		border: '1px solid #6c757d',
	}),
	menu: (provided) => ({
		...provided,
		backgroundColor: '#495057',
		color: '#ffffff',
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? '#343a40' : '#495057',
		color: '#ffffff',
		'&:hover': {
			backgroundColor: '#343a40',
			color: '#ffffff',
		},
	}),
	singleValue: (provided) => ({
		...provided,
		color: '#ffffff',
	}),
	placeholder: (provided) => ({
		...provided,
		color: '#b0b0b0',
	}),
}
