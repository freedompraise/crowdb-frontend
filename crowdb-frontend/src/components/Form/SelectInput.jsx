import { Controller } from 'react-hook-form'
import { Form } from 'react-bootstrap'
const SelectInput = ({
	control,
	id,
	label,
	name,
	containerClass,
	placeholder,
	labelClassName,
	className,
	children,
	...other
}) => {
	return (
		<Controller
			control={control}
			defaultValue={''}
			render={({ field, fieldState }) => {
				if (other.multiple) {
					field.value = [field.value]
				}
				return (
					<Form.Group className={containerClass}>
						{label && (
							<Form.Label className={labelClassName}>{label}</Form.Label>
						)}
						<Form.Select
							id={id ?? name}
							className={className}
							// placeholder={placeholder}
							isInvalid={fieldState.error != null}
							{...field}
							{...other}
						>
							{children}
						</Form.Select>
						{fieldState.error?.message && (
							<Form.Control.Feedback type="invalid" className="text-danger">
								{fieldState.error?.message}
							</Form.Control.Feedback>
						)}
					</Form.Group>
				)
			}}
			name={name}
		/>
	)
}
export default SelectInput
