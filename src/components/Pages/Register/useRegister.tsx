import { useRef, useState } from "react"
import useDbCheck from "../../../hooks/useDbCheck"
import axios from "axios"
const useRegister = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [repeatPassword, setRepeatPassword] = useState("")
	const [displayName, setDisplayName] = useState("")
	const usernameStatus = useDbCheck("/api/user/checkName", username)
	const [registerStatus, setRegisterStatus] = useState("")
	const registerMessage = useRef<string | null>(null)

	const register = () => {
		setRegisterStatus("WAITING")
		if (password === repeatPassword && usernameStatus === "OK") {
			axios
				.post("/api/register", { username, password, displayName })
				.then((res) => {
					registerMessage.current = res.data.message
					setRegisterStatus("OK")
				})
				.catch((e) => {
					console.error(e)
					registerMessage.current = e.response.data.message
					setRegisterStatus("ERROR")
				})
		}
	}

	return {
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
	}
}
export default useRegister
