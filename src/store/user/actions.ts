import { Action } from "redux"
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"

export const loginUser = (): Action => {
	return {
		type: LOGIN_USER,
	}
}
