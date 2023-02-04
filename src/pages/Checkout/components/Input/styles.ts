import styled, { css } from 'styled-components';
import { defaultTheme } from '~/styles/themes/default';

export const INPUT_SIZES = defaultTheme.inputs.size;

interface InputProps {
	readonly sizeVariant: keyof typeof INPUT_SIZES;
	hasError?: boolean;
}

export const Input = styled.input<InputProps>`
	max-width: ${({ theme, sizeVariant }) => theme.inputs.size[sizeVariant]};
	width: 100%;
	border-radius: 4px;
	padding: 0.75rem;
	border: 0;
	font-weight: 400;
	font-size: 0.875rem;
	line-height: 1.3;

	${({ hasError }) =>
		hasError &&
		css`
			:focus {
				outline: 0;
				box-shadow: 0 0 0 2px red;
			}
		`}

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;
