import styled from "styled-components"
import Select from "./Select"

export default styled(Select)`
	select {
		font-size: 1em;
		padding: 0.3em;
		border-radius: 0.5em;
		border: 1px ${({ theme }) => theme.border.toHex()} solid;
		color: ${({ theme }) => theme.textDark.toHex()};
		background-color: ${({ theme }) => theme.backgroundLight.toHex()};
	}
`
