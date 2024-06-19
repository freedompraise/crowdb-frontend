import { v2 as cloudinary } from 'cloudinary'
;(async function (cloudinary) {
	cloudinary.config({
		cloud_name: 'dkynj442k',
		api_key: '763167989451863',
		api_secret: import.meta.env.VITE_CLOUDINARY_SECRET,
	})

	// // Upload an image
	// const uploadResult = await cloudinary.uploader
	// 	.upload('https://res.cloudinary.com/demo/image/upload/sample.jpg', {
	// 		folder: 'demo',
	// 		public_id: 'sample',
	// 	}
	// 	)
	// 	.catch((error) => {
	// 		console.log(error)
	// 	})

	// console.log(uploadResult)

	// // Optimize delivery by resizing and applying auto-format and auto-quality
	// const optimizeUrl = cloudinary.url('', {
	// 	fetch_format: 'auto',
	// 	quality: 'auto',
	// })

	// console.log(optimizeUrl)

	// // Transform the image: auto-crop to square aspect_ratio
	// const autoCropUrl = cloudinary.url('', {
	// 	crop: 'auto',
	// 	gravity: 'auto',
	// 	width: 500,
	// 	height: 500,
	// })

	// console.log(autoCropUrl)
})()
