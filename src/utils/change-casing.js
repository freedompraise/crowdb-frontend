export const snakeToTitleCase = (value) => {
	return value
		.split('_')
		.filter((x) => x.length > 0)
		.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
		.join(' ')
}
export const kebabToTitleCase = (value) => {
	return value
		.split('-')
		.filter((x) => x.length > 0)
		.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
		.join(' ')
}
export const toSentenceCase = (value) => {
	return value.charAt(0).toUpperCase() + value.slice(1)
}
