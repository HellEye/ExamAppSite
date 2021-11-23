import styled from "styled-components"
import { IColors } from "../../../res/styles/colors"

interface Props {
	fontSize?: string
	theme: IColors
}

export default styled.div<Props>`
	font-size: ${({ fontSize }) => fontSize || "1rem"};
`
