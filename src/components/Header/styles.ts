import styled from 'styled-components'

export const Container = styled.div`
	height: 60px;
	background-color: ${({ theme }) => theme.color.primary};
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0 30px;
	justify-content: space-between;
`

export const SwitcherContainer = styled.div`
	width: fit-content;
	display:  flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
`