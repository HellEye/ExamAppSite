import { getCookie } from "../../scripts/cookie/cookies"

export interface IUser {
	id: string
	displayName: string
}

export interface IUserState {
	user?: IUser
	token?: string
}

const userToken = getCookie("userToken") || undefined

const userState: IUserState = {
	user: undefined,
	token: userToken,
}

export default userState
