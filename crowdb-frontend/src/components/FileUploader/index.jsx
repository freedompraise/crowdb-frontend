import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { FiX } from 'react-icons/fi'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { uploadImageToCloudinary } from './cloudinaryConfig'
import useFileUploader from './useFileUploader'

const FileUploader = ({
	showPreview = true,
	onFileUpload,
	icon,
	extraText,
	text,
}) => {
	const { selectedFiles, handleAcceptedFiles, removeFile } =
		useFileUploader(showPreview)
	const [uploading, setUploading] = useState(false)
	const [error, setError] = useState(null)
	const Icon = icon

	const handleFiles = async (acceptedFiles) => {
		setUploading(true)
		setError(null)

		try {
			const uploadedFiles = await Promise.all(
				acceptedFiles.map(async (file) => {
					if (!file || !file.type) {
						console.error('File type not supported', file)
						return null
					}

					try {
						const url = await uploadImageToCloudinary(file)
						return {
							...file,
							url,
							preview: file.type.startsWith('image')
								? URL.createObjectURL(file)
								: null,
							formattedSize: `${(file.size / 1024).toFixed(2)} KB`,
						}
					} catch (error) {
						console.error('Error uploading images:', file, error)
						return null
					}
				})
			)
			const validUploadedFiles = uploadedFiles.filter(Boolean)
			handleAcceptedFiles(validUploadedFiles, onFileUpload)
		} catch (error) {
			console.error('Error uploading images:', error)
			setError('Error uploading images')
		} finally {
			setUploading(false)
		}
	}

	return (
		<div>
			<Dropzone onDrop={handleFiles}>
				{({ getRootProps, getInputProps }) => (
					<div
						className="dropzone d-flex justify-content-center align-items-center"
						style={{ height: '300px' }}>
						<div className="dz-message needsclick" {...getRootProps()}>
							<input {...getInputProps()} />
							{Icon && <Icon className={`text-muted h1`} />}
							<h3>{text}</h3>
							<span className="text-muted fs-13">{extraText}</span>
						</div>
					</div>
				)}
			</Dropzone>

			<div className="dropzone-previews mt-3">
				{selectedFiles.map((file, idx) => (
					<Card className="mt-1 mb-0 shadow-none border" key={idx + '-file'}>
						<div className="p-2">
							<Row className="align-items-center">
								{file.preview && (
									<Col className="col-auto">
										<img
											data-dz-thumbnail=""
											className="avatar-sm rounded bg-light"
											alt={file.name}
											src={file.preview}
											style={{
												maxWidth: '100%',
												height: 'auto',
												maxHeight: '200px',
											}}
										/>
									</Col>
								)}
								{!file.preview && (
									<Col className="col-auto">
										<div className="avatar-sm">
											<span className="avatar-title bg-primary rounded">
												{file.name.split('.').pop().toUpperCase()}
											</span>
										</div>
									</Col>
								)}
								<Col className="ps-0">
									<Link to="" className="text-muted fw-bold">
										{file.name}
									</Link>
									<p className="mb-0">
										<strong>{file.formattedSize}</strong>
									</p>
								</Col>
								<Col className="text-end">
									<Link
										to=""
										className="btn btn-link btn-lg text-muted shadow-none">
										<FiX
											className="text-danger"
											onClick={() => removeFile(file)}
										/>
									</Link>
								</Col>
							</Row>
						</div>
					</Card>
				))}
			</div>

			{uploading && <div>Uploading...</div>}
			{error && <div className="text-danger">{error}</div>}
		</div>
	)
}

export { FileUploader }
