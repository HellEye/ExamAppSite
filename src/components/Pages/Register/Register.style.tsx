import styled from "styled-components"
import Register, { Props } from "./Register"

export default styled(Register)<Props>`
	.registerForm {
		& > * {
			margin-bottom: 1em;
		}
	}
`
