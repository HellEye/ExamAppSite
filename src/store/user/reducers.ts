import { Reducer } from "redux"
import { LOGIN_USER, LOGOUT_USER } from "./actions"
const reducer: Reducer = (state, action) => {
	switch (action.type) {
		case LOGIN_USER:
			break
		case LOGOUT_USER:
			break
		default:
			return state
	}
}

export default reducer
