import React, { ReactNode } from 'react'

import { MainContainer } from './styles'

interface ContainerProps {
	children: ReactNode
}

function Container({ children }: ContainerProps) {
	return <MainContainer>{children}</MainContainer>
}

export default Container
