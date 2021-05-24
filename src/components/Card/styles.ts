import styled from 'styled-components'

import theme from '../../styles/theme'

const borderColor = theme.colors.border

export const Container = styled.div`
	width: 100%;
	min-width: 50rem;

	height: auto;

	display: flex;
	flex-direction: row;

	border-bottom: solid ${borderColor};
	border-width: 1px;

	padding: 2rem;
`
