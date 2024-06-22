import { v2 as cloudinary } from 'cloudinary'
;(async function (cloudinary) {
	cloudinary.config({
		cloud_name: 'dkynj442k',
		api_key: '763167989451863',
		api_secret: import.meta.env.VITE_CLOUDINARY_SECRET,
	})
})(cloudinary)

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
		return data
	} catch (error) {
		console.error('Error uploading image:', error)
		throw error
	}
}
