import React, { useEffect } from "react"
import { IColors } from "../../../res/styles/colors"
import { Button } from "../../UI/Button/Button.styled"
import TextInput from "../../UI/Input/TextInput/TextInput.style"
import useRegister from "./useRegister"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
export interface Props {
	className?: string
	theme: IColors
}

const Register = ({ className }: Props) => {
	const {
		username,
		setUsername,
		password,
		setPassword,
		repeatPassword,
		setRepeatPassword,
		displayName,
		setDisplayName,
		usernameStatus,
		register,
		registerStatus,
		registerMessage,
	} = useRegister()
	const navigate = useNavigate()

	useEffect(() => {
		if (registerStatus === "OK") {
			toast.info(registerMessage.current || "")
			navigate("/login")
		} else if (registerStatus === "ERROR") {
			toast.error(registerMessage.current || "")
		}
	}, [navigate, registerStatus, registerMessage])

	return (
		<div className={className}>
			<h1> Register </h1>
			<div className={"registerForm"}>
				<TextInput
					label="User name"
					status={usernameStatus}
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextInput
					label="Display name"
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
				/>
				<TextInput
					label="Password"
					type="password"
					value={password}
					status={
						password && repeatPassword
							? password === repeatPassword
								? "OK"
								: "ERROR"
							: ""
					}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<TextInput
					label="Repeat password"
					type="password"
					value={repeatPassword}
					onChange={(e) => setRepeatPassword(e.target.value)}
				/>
				<Button fontSize="2rem" onClick={register}>
					Register
				</Button>
			</div>
		</div>
	)
}

export default Register
