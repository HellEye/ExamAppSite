import React, { ReactElement } from "react"

interface Props {
	className?: string
	children?: ReactElement
}

const ContentWrapper = ({ className, children }: Props) => {
	return <div className={className}>{children || <div />}</div>
}

export default ContentWrapper
