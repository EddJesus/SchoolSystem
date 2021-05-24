import React, { ReactNode } from 'react'

import { Container } from './styles'

interface WrapperInfoProps {
	children: ReactNode
}

function WrapperInfo({ children }: WrapperInfoProps) {
	return <Container>{children}</Container>
}

export default WrapperInfo
