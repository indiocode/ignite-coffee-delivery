import type { ReactElement, ReactNode } from 'react';

import type { ICON_COLOR } from './styles';
import { CircleIconContainer } from './styles';

interface CircleIconProps {
	children: ReactNode;
	type: keyof typeof ICON_COLOR;
}

export function CircleIcon({
	children,
	...rest
}: CircleIconProps): ReactElement {
	return <CircleIconContainer {...rest}>{children}</CircleIconContainer>;
}
