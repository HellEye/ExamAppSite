import ThemeTest from "./ThemeTest"
import styled from "styled-components"

export default styled(ThemeTest)`
	.content {
		height: 100%;
		background-color: ${({ theme }) => theme.backgroundDark.toHex()};
		color: ${({ theme }) => theme.textNormal.toHex()};

		.textAccept {
			color: ${({ theme }) => theme.textAccept.toHex()};
		}

		.textError {
			color: ${({ theme }) => theme.textError.toHex()};
		}

		.textDark {
			color: ${({ theme }) => theme.textDark.toHex()};
		}
		.textInfo {
			color: ${({ theme }) => theme.textInfo.toHex()};
		}
		.backgroundNormal {
			background-color: ${({ theme }) => theme.backgroundNormal.toHex()};
		}
		.backgroundLight {
			background-color: ${({ theme }) => theme.backgroundLight.toHex()};
		}
	}
`
