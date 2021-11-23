import "./App.css"
import React from "react"
import Header from "./components/Pages/Header/Header.style"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/Pages/LandingPage/LandingPage.style"
import CreateTest from "./components/Pages/CreateTest/CreateTest.style"
import ContentWrapper from "./components/Wrappers/ContentWrapper/ContentWrapper.style"
// import ThemeTestStyle from "./components/Util/ThemeTest/ThemeTest.style"
import EditTest from "./components/Pages/EditTest/EditTest.style"

import "react-toastify/dist/ReactToastify.css"
import Register from "./components/Pages/Register/Register.style"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import ContextWrapper from "./components/Wrappers/ContextWrapper/ContextWrapper"
import Login from "./components/Pages/Login/Login.style"

type PropTypes = {
	className?: string
}
function App({ className }: PropTypes) {
	return (
		<ContextWrapper>
			<div className={className}>
				<Header />
				<ContentWrapper>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/create" element={<CreateTest />} />
						{/* TODO */}
						<Route path="/edit" />

						<Route path="/edit/:id" element={<EditTest />} />
					</Routes>
				</ContentWrapper>
			</div>
		</ContextWrapper>
	)
}

export default App
