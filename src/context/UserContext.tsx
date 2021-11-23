import { createContext, useState, useContext } from "react"

export interface IUser {
	username: string
	displayName: string
	token: string
}

const userContextInitial: IUserContext = {
	id: "",
	username: "",
	displayName: "",
	token: "",
	setId: () => {},
	setUsername: () => {},
	setDisplayName: () => {},
	setToken: () => {},
}

interface IUserContext {
	id: string
	username: string
	displayName: string
	token: string
	setId: (id: string) => void
	setUsername: (username: string) => void
	setDisplayName: (displayName: string) => void
	setToken: (token: string) => void
}

const UserContext = createContext<IUserContext>(userContextInitial)

const useUserContext = () => {
	return useContext(UserContext)
}

const useUserContextProvider = () => {
	const [id, setId] = useState("")
	const [username, setUsername] = useState("")
	const [displayName, setDisplayName] = useState("")
	const [token, setToken] = useState(() => {
		return localStorage.getItem("token") || ""
	})

	return {
		id,
		setId,
		username,
		setUsername,
		displayName,
		setDisplayName,
		token,
		setToken,
	}
}
const UserContextProvider = UserContext.Provider
export { useUserContextProvider, UserContextProvider, useUserContext }
