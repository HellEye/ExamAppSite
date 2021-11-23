import axios from "axios"
import { useState, useRef } from "react"
import { useUserContext } from "../../../context/UserContext"

const useLogin = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [expireIn, setExpireIn] = useState(0)
	const [loginStatus, setLoginStatus] = useState("")
	const loginMessage = useRef<string | null>(null)
	const {
		setUsername: setUserUsername,
		setDisplayName: setUserDisplayName,
		setToken: setUserToken,
	} = useUserContext()
	const logIn = () => {
		if (!username || !password) return
		setLoginStatus("WAITING")
		console.log({ username, password, expireIn })
		axios
			.post("/api/login", { username, password, expireIn })
			.then((res) => {
				console.log(res.data)
				loginMessage.current = res.data.message
				setLoginStatus("OK")
				setUserUsername(res.data.user.username)
				setUserDisplayName(res.data.user.displayName)
				setUserToken(res.data.token.token)
				localStorage.setItem("expireIn", expireIn.toString())
				localStorage.setItem("token", res.data.token.token)
			})
			.catch((e) => {
				console.error(e)
				loginMessage.current = e.response.data.message
				setLoginStatus("ERROR")
			})
	}
	return {
		username,
		setUsername,
		password,
		setPassword,
		expireIn,
		setExpireIn,
		loginStatus,
		loginMessage,
		logIn,
	}
}

export default useLogin
