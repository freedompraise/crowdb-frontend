const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dkynj442k/image/upload'
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

export const uploadImageToCloudinary = async (image) => {
	const formData = new FormData()
	formData.append('file', image)
	formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

	try {
		const response = await fetch(CLOUDINARY_URL, {
			method: 'POST',
			body: formData,
		})

		if (!response.ok) {
			throw new Error('Error uploading image to Cloudinary')
		}

		const data = await response.json()
		return data.secure_url
	} catch (error) {
		console.error('Error uploading image:', error)
		throw error
	}
}
