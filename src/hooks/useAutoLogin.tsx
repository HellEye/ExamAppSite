import { useEffect } from "react"
import { useUserContext } from "../context/UserContext"
import axios from "axios"
import { toast } from "react-toastify"
const useAutoLogin = () => {
	const { token, setDisplayName, setUsername, setId } = useUserContext()
	useEffect(() => {
		if (token) {
			const expireIn = parseInt(localStorage.getItem("expireIn") || "0")
			axios
				.post("/api/login", { token, expireIn })
				.then((res) => {
					setDisplayName(res.data.displayName)
					setUsername(res.data.username)
					setId(res.data._id)
				})
				.catch((e) => {
					toast.error(`${e?.data?.message || e}`)
				})
		}
	}, [token, setDisplayName, setUsername, setId])
}

export default useAutoLogin
