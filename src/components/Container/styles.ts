import styled from 'styled-components'

import theme from '../../styles/theme'

const backgroundColor = theme.colors.background

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	width: 100%;

	background-color: ${backgroundColor};

	border-radius: 50px;

	margin-top: 30px;
`
