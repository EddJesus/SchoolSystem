import React, { ImgHTMLAttributes, ReactNode } from 'react'

import { AvatarWrapper } from './styles'

interface AvatarProps extends ImgHTMLAttributes<any> {
	children?: ReactNode
	source?: string
}

function Avatar({ children, source, ...rest }: AvatarProps) {
	return (
		<>
			<AvatarWrapper src={source} {...rest} />
			{children}
		</>
	)
}

export default Avatar
