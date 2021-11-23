import { useEffect } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { Button } from "../../UI/Button/Button.styled"
import TextInput from "../../UI/Input/TextInput/TextInput.style"
import Select from "../../UI/Select/Select.style"
import { Option } from "../../UI/Select/Select"
import useLogin from "./useLogin"

interface Props {
	className?: string
}
const stayLoggedInOptions: Option<number>[] = [
	{ value: 0, label: "Don't stay logged in" },
	{ value: 7, label: "7 days" },
	{ value: 30, label: "30 days" },
	{ value: 60, label: "60 days" },
	{ value: 180, label: "180 days" },
	{ value: -1, label: "Never Log out" },
]
const Login = ({ className }: Props) => {
	const login = useLogin()
	const navigate = useNavigate()
	useEffect(() => {
		if (login.loginStatus === "OK") {
			toast.info(login.loginMessage.current || "")
			navigate("/")
		} else if (login.loginStatus === "ERROR") {
			toast.error(login.loginMessage.current || "")
		}
	}, [navigate, login.loginStatus, login.loginMessage])
	return (
		<div className={className}>
			<TextInput
				value={login.username}
				onChange={(e) => login.setUsername(e.target.value)}
				label="Username"
			/>
			<TextInput
				type="password"
				value={login.password}
				onChange={(e) => login.setPassword(e.target.value)}
				label="Password"
			/>
			<Select
				label="Stay logged in for: "
				optionList={stayLoggedInOptions}
				onChange={(e) => login.setExpireIn(parseInt(e.target.value))}
			/>
			<div className="actionButtons">
				<Button fontSize="1.5em" onClick={() => login.logIn()}>
					Log In
				</Button>
				<Button fontSize="1.5em" onClick={() => navigate("/register")}>
					Register
				</Button>
			</div>
		</div>
	)
}

export default Login
