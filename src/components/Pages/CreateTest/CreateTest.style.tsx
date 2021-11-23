import styled from "styled-components"
import CreateTest from "./CreateTest"
export default styled(CreateTest)`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	margin-left: 3em;
	.inputs {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		input,
		textarea {
			width: 35rem;
			box-sizing: border-box;
		}
		textarea {
			height: 10rem;
		}
	}
	.inputs > * {
		margin-bottom: 1rem;
	}
`
