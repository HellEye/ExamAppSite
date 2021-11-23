// import axios from "axios"
import React, { useEffect } from "react"
import { Button } from "../../UI/Button/Button.styled"
import TextInput from "../../UI/Input/TextInput/TextInput.style"
// import { useNavigate } from "react-router-dom"
import useTest from "../../../hooks/useTest"
import { getCookie } from "../../../scripts/cookie/cookies"
interface Props {
	className?: string
}

const CreateTest = ({ className }: Props) => {
	const {
		name,
		setName,
		description,
		setDescription,
		author,
		setAuthor,
		setUser,
		password,
		setPassword,
		saveTest,
	} = useTest()

	// const navigate = useNavigate()
	useEffect(() => {
		const user = getCookie("userId")
		if (user) setUser(user)
	}, [setUser])

	const createTest = () => {
		saveTest()
	}

	return (
		<div className={className}>
			<div className="inputs">
				<TextInput
					fontSize="1.2rem"
					label="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<TextInput
					fontSize="1.2rem"
					label="Author"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<TextInput
					fontSize="1.2rem"
					label="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<TextInput
					type="textarea"
					fontSize="1.2rem"
					label="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button fontSize="2rem" onClick={() => createTest()}>
					Create
				</Button>
			</div>
		</div>
	)
}

export default CreateTest
