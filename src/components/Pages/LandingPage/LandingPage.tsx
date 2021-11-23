import React from "react"
import { Button } from "../../UI/Button/Button.styled"
import { useNavigate } from "react-router-dom"
interface Props {
	className?: string
}

const LandingPage = ({ className }: Props) => {
	const navigate = useNavigate()
	return (
		<div className={className}>
			<Button fontSize="2.5rem" onClick={() => navigate("/create")}>
				Create a new test
			</Button>
			<Button fontSize="2.5rem" onClick={() => navigate("/edit")}>
				Edit an existing test
			</Button>
		</div>
	)
}

export default LandingPage
