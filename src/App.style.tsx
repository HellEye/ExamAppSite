import App from "./App"
import styled from "styled-components"

export default styled(App)`
	height: 100%;
	display: grid;
	grid-template-rows: max(15%, 120px) auto;

	.content {
		display: grid;
	}
`
