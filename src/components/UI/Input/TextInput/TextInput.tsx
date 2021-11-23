import React, { InputHTMLAttributes, useRef } from "react"
import FontSizeDiv from "../../../Wrappers/FontSizeDiv/FontSizeDiv.style"
import { nanoid } from "nanoid"
import { BiErrorCircle, BiCheckCircle } from "react-icons/bi"
import { useTheme } from "../../../../config/styled-components.d"
interface Props
	extends Partial<InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>> {
	className?: string
	label?: string
	fontSize?: string
	status?: string
}

const TextInput = ({
	className,
	label,
	fontSize,
	type,
	children,
	status,
	...rest
}: Props) => {
	const id = useRef(nanoid())
	const inputProps = {
		id: id.current,
		className: status,
		...rest,
	}
	const theme = useTheme()
	return (
		<FontSizeDiv className={className} fontSize={fontSize}>
			{label ? <label htmlFor={id.current}>{label}</label> : ""}
			{type === "textarea" ? (
				<textarea {...inputProps}></textarea>
			) : (
				<input type={type || "text"} {...inputProps} />
			)}
			{status === "WAITING" ? <div className="spinner"></div> : ""}
			{status === "ERROR" ? (
				<BiErrorCircle color={theme?.textError.toHex()} height="0.6em" />
			) : (
				""
			)}
			{status === "OK" ? (
				<BiCheckCircle color={theme?.textAccept.toHex()} height="0.6em" />
			) : (
				""
			)}
			{children}
		</FontSizeDiv>
	)
}

export default TextInput
