import React from "react"

interface Props {
	className?: string
}

const ThemeTest = ({ className }: Props) => {
	return (
		<div className={className}>
			<div className="content">
				<p className="textDark">Dark</p>
				<p className="textNormal">Normal</p>
				<p className="textInfo">Info</p>
				<p className="textAccept">Accept</p>
				<p className="textError">Error</p>
				<div className="backgroundLight">
					<p className="textDark">Dark</p>
					<p className="textNormal">Normal</p>
					<p className="textInfo">Info</p>
					<p className="textAccept">Accept</p>
					<p className="textError">Error</p>
				</div>
				<div className="backgroundNormal">
					<p className="textDark">Dark</p>
					<p className="textNormal">Normal</p>
					<p className="textInfo">Info</p>
					<p className="textAccept">Accept</p>
					<p className="textError">Error</p>
				</div>
			</div>
		</div>
	)
}

export default ThemeTest
