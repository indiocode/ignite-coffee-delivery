import styled from 'styled-components';
import { defaultTheme } from '~/styles/themes/default';

export const COUNTER_SIZE = defaultTheme.counter.size;

interface CounterProps {
	variantSize: keyof typeof COUNTER_SIZE;
}

export const CounterContainer = styled.div<CounterProps>`
	display: flex;
	gap: 0.25rem;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.color.base.button};
	align-items: center;
	justify-content: space-between;
	width: 4.5rem;
	height: ${({ theme, variantSize }) => theme.counter.size[variantSize]};
	padding: 0 0.5rem;

	button {
		padding: 0;
		background: transparent;
		border: 0;
		cursor: pointer;

		svg path {
			color: ${({ theme }) => theme.color.purple.dark};
		}
	}

	span {
		color: ${({ theme }) => theme.color.base.title};
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.3;
	}
`;
