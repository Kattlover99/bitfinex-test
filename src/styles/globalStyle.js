import { createGlobalStyle } from "styled-components";
import { AsideVar, BasicVar, DefaultColor, DeviceWidth, FontSize, FontSize_Sm, device } from "./variables";
import { setVariable } from "../utils/style.util";

const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: 'verdana';
        font-weight: 300;
        font-style: normal;
    }

	:root {
		${setVariable(DefaultColor)}
		${setVariable(DeviceWidth)}
		${setVariable(BasicVar)}
		${setVariable(FontSize)}
		${setVariable(AsideVar)}
	}

	html {
		box-sizing: border-box;
		font-family: ${BasicVar.font1.label};
		line-height: ${BasicVar.lineH.label};
		font-size: ${FontSize.fSize.label};

		background: ${BasicVar.bg.label};
		color: ${BasicVar.color.label};
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}


	body {
		margin: 0;
		background: ${BasicVar.bgBody.label};
		background-size: 120% 140%;
		background-position: 25% 100%;
		overflow: hidden;
    	user-select: none;

		&:before {
			position: absolute;
			top: -10%;
			left: -10%;
			width: 80%;
			height: 80%;

			content: '';
		}
		&:after {
			position: absolute;
			bottom: -10%;
			right: -10%;
			width: 80%;
			height: 80%;
			transform: rotate(-180deg);
			content: '';
		}
	}

	*, *:before, *:after {
		box-sizing: inherit;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		text-transform: inherit;
		color: inherit;
	}

	#root {
		position: relative;
		z-index: 1;
		overflow: hidden;

		@media ${device.mobileL} {
			${setVariable(FontSize_Sm)}
		}
	}
	
	ul {
		padding: 0;
		margin: 0;
	}

	span {
		display: inline-block;
	}

	a {
		display: inline-block;
		text-decoration: none;
	}

	a, button, input[type=button], input[type=submit] {
		cursor: pointer;
	}

	input {
		min-width: 0;
	}

	&::-webkit-scrollbar {
		position: absolute;
		width: 5px;
		height: 5px;
	}

	&::-webkit-scrollbar-track {
		// background: rgba(255, 255, 255, 0.1);
	}

	&::-webkit-scrollbar-thumb {
		background: #999;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #888;
	}
`

export default GlobalStyle;
