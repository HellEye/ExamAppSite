import axios from "axios"
import { MutableRefObject, useEffect, useRef, useState } from "react"

type Status = "OK" | "ERROR" | "WAITING" | ""

const useDbCheck = (
	apiPath: string,
	value: string,
	delay: number = 500
): Status => {
	const callback: MutableRefObject<NodeJS.Timeout | null> =
		useRef<NodeJS.Timeout>(null)
	const [status, setStatus] = useState<Status>("")
	useEffect(() => {
		if (callback.current) clearTimeout(callback.current)
		setStatus("WAITING")
		if (value) {
			callback.current = setTimeout(() => {
				axios
					.post(apiPath, {
						value,
					})
					.then((res) => {
						setStatus(res.data.status)
					})
			}, delay)
		} else {
			setStatus("")
		}
	}, [apiPath, value, delay])

	return status
}

export default useDbCheck
