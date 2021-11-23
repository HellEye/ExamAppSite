import React, { SelectHTMLAttributes, useRef } from "react"
import { nanoid } from "nanoid"
import FontSizeDiv from "../../Wrappers/FontSizeDiv/FontSizeDiv.style"

type OptionValueType = string | number

export interface Option<T extends OptionValueType> {
	value: T
	label: string
}
interface Props<T extends OptionValueType>
	extends Partial<SelectHTMLAttributes<HTMLSelectElement>> {
	className?: string
	label?: string | React.Component
	optionList: Option<T>[]
	fontSize?: string
}

const Select = <T extends OptionValueType>({
	className,
	label,
	optionList: options,
	fontSize,
	...rest
}: Props<T>) => {
	const id = useRef(nanoid())
	return (
		<FontSizeDiv className={className} fontSize={fontSize}>
			{label && <label htmlFor={id.current}>{label}</label>}
			<select id={id.current} {...rest}>
				{options.map((o) => {
					return (
						<option key={o.value} value={o.value}>
							{o.label}
						</option>
					)
				})}
			</select>
		</FontSizeDiv>
	)
}

export default Select
