import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	
	body {
		background-color: ${({ theme }) => theme.color.background};
		font-size: 14px;
		color: ${({ theme }) => theme.color.text};
		font-family: sans-serif;
	}

	#root {
		margin: 0 auto;
	}
`
