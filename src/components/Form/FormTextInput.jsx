import { Controller } from 'react-hook-form'
import { Form } from 'react-bootstrap'
const FormInput = ({
	control,
	id,
	label,
	name,
	containerClass,
	placeholder,
	labelClassName,
	className,
	type,
	noValidate,
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
						type={type}
						placeholder={placeholder}
						isInvalid={!noValidate && fieldState.error != null}
						{...other}
						{...field}
					/>
					{!noValidate && fieldState.error?.message && (
						<Form.Control.Feedback type="invalid" className="text-danger">
							{fieldState.error?.message}
						</Form.Control.Feedback>
					)}
				</Form.Group>
			)}
		/>
	)
}
export default FormInput
