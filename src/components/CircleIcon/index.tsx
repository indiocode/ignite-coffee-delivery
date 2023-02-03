import { ReactNode } from 'react';
import { CircleIconContainer, ICON_COLOR } from './styles';

interface CircleIconProps {
	children: ReactNode;
	type: keyof typeof ICON_COLOR;
}

export function CircleIcon({ children, ...rest }: CircleIconProps) {
	return <CircleIconContainer {...rest}>{children}</CircleIconContainer>;
}
