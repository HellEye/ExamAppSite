import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
interface Props {
	className?: string
}

const EditTest = ({ className }: Props) => {
	const { id } = useParams()

	useEffect(() => {}, [id])
	return (
		<div className={className}>
			<h1> Editing test {id} </h1>
			{/* <h3>{data.name}</h3> */}
		</div>
	)
}

export default EditTest
