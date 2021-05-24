import styled from 'styled-components'
import theme from '../../styles/theme'

const borderColor = theme.colors.border

export const AvatarWrapper = styled.img`
	height: 10rem;
	width: 10rem;

	float: left;
	border-radius: 50%;
	border-color: ${borderColor};
	border-style: solid;
	border-width: 1px;
`
