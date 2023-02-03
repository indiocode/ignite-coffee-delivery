import styled from 'styled-components';

export const ICON_COLOR = {
	default: '#574F4D',
	primary: '#8047F8',
	secondary: '#DBAC2C',
	tertiary: '#C47F17',
} as const;

interface CicleIconProps {
	type: keyof typeof ICON_COLOR;
}

export const CircleIconContainer = styled.div<CicleIconProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	background-color: ${({ type }) => ICON_COLOR[type]};
	border-radius: 50%;

	svg {
		color: ${({ theme }) => theme.color.white.default};
	}
`;
