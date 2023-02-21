/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const CartContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2.5rem 0;

	form {
		width: 100%;
		display: flex;
		gap: 2rem;
	}

	@media (max-width: 1090px) {
		form {
			flex-direction: column;
		}
	}
`;

export const BaseSectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 100%;

	h1 {
		font-family: 'Baloo 2', cursive;
		color: ${({ theme }) => theme.color.base.subtitle};
		font-weight: 700;
		font-size: 1.125rem;
		line-height: 1.3;
	}
`;

export const BaseFormGroupContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2.5rem;
	background-color: ${({ theme }) => theme.color.base.card};
`;
