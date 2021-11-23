import React from "react"
import { ThemeProvider } from "../../../config/styled-components.d"
import { colorsDark, colorsLight, Theme } from "../../../res/styles/colors"
import {
	UserContextProvider,
	useUserContextProvider,
} from "../../../context/UserContext"
import ToastContainer from "../../UI/Toast/ToastContainer.style"
import { BrowserRouter } from "react-router-dom"
export const ToggleThemeContext = React.createContext(() => {})

const ContextWrapper: React.FC<{}> = (props) => {
	const [theme, setTheme] = React.useState<Theme>(
		(localStorage.getItem("theme") as Theme) || "light"
	)
	const userContextValue = useUserContextProvider()
	const toggleTheme = React.useCallback(() => {
		setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"))
	}, [])

	React.useEffect(() => {
		localStorage.setItem("theme", theme)
	}, [theme])
	return (
		<ThemeProvider theme={theme === "light" ? colorsLight : colorsDark}>
			<ToggleThemeContext.Provider value={toggleTheme}>
				<UserContextProvider value={userContextValue}>
					<BrowserRouter>
						<ToastContainer />
						{props.children}
					</BrowserRouter>
				</UserContextProvider>
			</ToggleThemeContext.Provider>
		</ThemeProvider>
	)
}

export default ContextWrapper
