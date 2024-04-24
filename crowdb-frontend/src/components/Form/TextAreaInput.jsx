import { Controller } from 'react-hook-form'
import { Form } from 'react-bootstrap'
const TextAreaInput = ({
	control,
	id,
	label,
	name,
	containerClass,
	placeholder,
	labelClassName,
	className,
	type,
	rows,
	...other
}) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={''}
			render={({ field, fieldState }) => (
				<Form.Group className={containerClass}>
					{label && <Form.Label className={labelClassName}>{label}</Form.Label>}
					<Form.Control
						className={className}
						id={id ?? name}
						{...other}
						{...field}
						as={'textarea'}
						rows={rows ?? 3}
						type={type}
						placeholder={placeholder}
						isInvalid={fieldState.error != null}
					/>
					{fieldState.error?.message && (
						<Form.Control.Feedback type="invalid" className="text-danger">
							{fieldState.error?.message}
						</Form.Control.Feedback>
					)}
				</Form.Group>
			)}
		/>
	)
}
export default TextAreaInput
