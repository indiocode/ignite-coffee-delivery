import styled from 'styled-components';

export const Counter = styled.div`
	display: flex;
	gap: 0.25rem;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.color.base.button};
	align-items: center;
	justify-content: center;
	width: 4.5rem;
	height: 2.375rem;

	button {
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
