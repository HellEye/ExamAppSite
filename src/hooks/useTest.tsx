import { useEffect, useRef, useState } from "react"
import axios, { AxiosResponse } from "axios"
export interface ITest {
	name: string
	author: string
	description?: string
	user?: string
	created: number
	modified: number
	password: string
}

const useTest = (id?: string) => {
	const [name, setName] = useState("")
	const [author, setAuthor] = useState("")
	const [user, setUser] = useState<string | undefined>(undefined)
	const [created, setCreated] = useState(0)
	const [modified, setModified] = useState(0)
	const [password, setPassword] = useState("")
	const [description, setDescription] = useState<string | undefined>(undefined)

	const saveTest = useRef(() => {
		const testData = {
			name,
			author,
			user,
			modified,
			created,
			password,
			description,
		}
		if (id) axios.post(`/api/tests/${id}`, testData)
		else axios.put(`/api/tests/`, testData)
	})
	useEffect(() => {
		if (id) {
			axios.get(`/api/tests/${id}`).then((res: AxiosResponse<ITest>) => {
				setName(res.data.name)
				setAuthor(res.data.author)
				setUser(res.data.user)
				setCreated(res.data.created)
				setModified(res.data.modified)
				setPassword(res.data.password)
				setDescription(res.data.description)
			})
		}
	}, [id])

	return {
		name,
		setName,
		author,
		setAuthor,
		user,
		setUser,
		created,
		modified,
		setModified,
		password,
		setPassword,
		description,
		setDescription,
		saveTest: saveTest.current,
	}
}

export default useTest
