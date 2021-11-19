import React from "react"
import { ToggleThemeContext } from "../../App"

interface Props {
	className?: string
}

const Header = ({ className }: Props) => {
	const toggleTheme = React.useContext(ToggleThemeContext)
	return (
		<div className={className}>
			<h1 className="logo" onClick={() => toggleTheme()}>
				Quizzr
			</h1>
		</div>
	)
}

export default Header
