import React from "react"
import { ToastContainer } from "react-toastify"
import { IColors } from "../../../res/styles/colors"
interface Props {
	className?: string
	theme?: IColors
}

const MyToastContainer = ({ className, theme }: Props) => {
	return <ToastContainer className={className} theme={theme?.type} />
}

export default ToastContainer
