import React from "react"

interface Props {
	className?: string
}

const ThemeTest = ({ className }: Props) => {
	return (
		<div className={className}>
			<div className="content">
				<h2 className="textDark">Main BG </h2>
				<p className="textDark">Dark</p>
				<p className="textNormal">Normal</p>
				<p className="textInfo">Info</p>
				<p className="textAccept">Accept</p>
				<p className="textError">Error</p>
				<p className="border">Border</p>
				<div className="backgroundLight">
					<h2 className="textDark"> Buttons mainly </h2>
					<p className="textDark">Dark</p>
					<p className="textNormal">Normal</p>
					<p className="textInfo">Info</p>
					<p className="textAccept">Accept</p>
					<p className="textError">Error</p>
					<p className="border">Border</p>
				</div>
				<div className="backgroundNormal">
					<h2 className="textDark">Header</h2>
					<p className="textDark">Dark</p>
					<p className="textNormal">Normal</p>
					<p className="textInfo">Info</p>
					<p className="textAccept">Accept</p>
					<p className="textError">Error</p>
					<p className="border">Border</p>
				</div>
			</div>
		</div>
	)
}

export default ThemeTest
