import React from "react"
import { Button } from "../styled/Button.styled"

interface Props {
	className?: string
}

const LandingPage = ({ className }: Props) => {
	return (
		<div className={className}>
			<div className="buttonWrapper">
				<Button>Test</Button>
			</div>
		</div>
	)
}

export default LandingPage
