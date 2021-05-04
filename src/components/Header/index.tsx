import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { lighten } from 'polished'

import { Container, SwitcherContainer } from './styles'

interface HeaderProps {
	toggleTheme(): void
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
	const { color, title } = useContext(ThemeContext)

	return (
		<Container>
			<h1>Theme Switcher</h1>

			<SwitcherContainer>
				<span className="material-icons">light_mode</span>

				<Switch 
					onChange={toggleTheme} 
					checked={title === 'dark'}
					checkedIcon={false}
					uncheckedIcon={false}
					height={10}
					width={40}
					handleDiameter={20}
					offColor={color.text}
					onColor={lighten(0.3, color.primary)}
				/>

				<span className="material-icons">dark_mode</span>
			</SwitcherContainer>

		</Container>
	)
}

export default Header
