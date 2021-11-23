import React from "react"
import { ToggleThemeContext } from "../../Wrappers/ContextWrapper/ContextWrapper"
import { toast } from "react-toastify"
import { Button } from "../../UI/Button/Button.styled"
import useAutoLogin from "../../../hooks/useAutoLogin"
import { useUserContext } from "../../../context/UserContext"
import { useNavigate } from "react-router-dom"

interface Props {
	className?: string
}

const Header = ({ className }: Props) => {
	const toggleTheme = React.useContext(ToggleThemeContext)
	const user = useUserContext()
	const navigate = useNavigate()
	useAutoLogin()
	const onTestClick = (e: any) => {
		toast.warn("Test")
	}
	return (
		<div className={className}>
			<h1 className="logo" onClick={() => toggleTheme()}>
				Quizzr
			</h1>
			<Button onClick={onTestClick}>Test button</Button>
			{user.username ? (
				<h3>Logged in as {user.displayName || user.username}</h3>
			) : (
				<Button onClick={() => navigate("/login")}>Log in</Button>
			)}
		</div>
	)
}

export default Header
