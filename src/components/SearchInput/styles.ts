import styled from 'styled-components'
import theme from '../../styles/theme'

const borderColor = theme.colors.border
const textColor = theme.colors.text

export const Container = styled.div`
	width: 100%;
`
export const Form = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Input = styled.input`
	width: 98%;

	color: ${textColor};

	margin-top: 0.5rem;
	padding: 1.2rem;
	outline: none;
	border: 0;
	border-bottom: 1px solid ${borderColor};

	::-webkit-input-placeholder {
		font-size: 1.7rem;
		color: ${textColor};
	}
`
