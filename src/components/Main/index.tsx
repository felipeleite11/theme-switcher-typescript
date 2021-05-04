import React, { ReactNode } from 'react'

import { Container } from './styles'

interface MainProps {
	children: ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	)
}

export default Main
