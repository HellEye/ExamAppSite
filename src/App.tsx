import "./App.css"
import React from "react"
import Header from "./components/Header/Header.style"
import { colorsDark, colorsLight, Theme } from "./res/styles/colors"
import { ThemeProvider } from "styled-components"
// import ThemeTest from "./components/ThemeTest/ThemeTest.style"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage.style"
export const ToggleThemeContext = React.createContext(() => {})

type PropTypes = {
	className?: string
}
function App({ className }: PropTypes) {
	const [theme, setTheme] = React.useState<Theme>(
		(localStorage.getItem("theme") as Theme) || "light"
	)
	const toggleTheme = React.useCallback(() => {
		setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"))
	}, [])
	React.useEffect(() => {
		localStorage.setItem("theme", theme)
	}, [theme])
	return (
		<ThemeProvider theme={theme === "light" ? colorsLight : colorsDark}>
			<ToggleThemeContext.Provider value={toggleTheme}>
				<BrowserRouter>
					<div className={className}>
						<Header />
						<Routes>
							<Route path="/" element={<LandingPage />} />
						</Routes>
					</div>
				</BrowserRouter>
			</ToggleThemeContext.Provider>
		</ThemeProvider>
	)
}

export default App
