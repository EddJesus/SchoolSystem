import styled from 'styled-components'
import { FiMinus, FiPlus } from 'react-icons/fi'

import theme from '../../styles/theme'

const textColor = theme.colors.text
const headingColor = theme.colors.heading

export const MinusIcon = styled(FiMinus).attrs(props => ({
	size: '30'
}))`
	color: ${textColor};
`

export const PlusIcon = styled(FiPlus).attrs(props => ({
	size: '30'
}))`
	color: ${textColor};
`

export const Container = styled.div`
	width: auto;

	display: flex;

	justify-content: flex-end;
	align-items: flex-start;

	&:hover {
		${MinusIcon} {
			color: ${headingColor};
		}
		${PlusIcon} {
			color: ${headingColor};
		}
	}
`

export const Button = styled.button`
	background: none;
	border: 0;
	:focus :active {
		outline: none;
	}
`
