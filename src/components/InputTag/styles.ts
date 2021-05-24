import styled from 'styled-components'
import theme from '../../styles/theme'

const textColor = theme.colors.text

export const Input = styled.input`
	background-color: none;
	border: 0;
	border-bottom: solid 0.2rem ${textColor};

	width: 35%;

	padding: 0.5rem;

	outline: none;
`
