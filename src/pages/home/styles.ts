/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const HomeContainer = styled.div`
	main {
		display: flex;
		gap: 3.5rem;
		padding: 5.75rem 0;

		div img {
			max-width: 29.75rem;
			width: 100%;

			@media (max-width: 1160px) {
				display: none;
			}
		}

		@media (max-width: 1160px) {
			padding: 2rem 0;
		}
	}

	section {
		display: flex;
		flex-direction: column;

		gap: 3.375rem;
		padding: 2rem 0;
	}
`;

export const HomeMainInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 2rem;

	max-width: 36.75rem;
	width: 100%;

	h1 {
		color: ${({ theme }) => theme.color.base.title};
		font-size: 3rem;
		font-family: 'Baloo 2', cursive;
		font-weight: 800;
		line-height: 1.3;

		@media (max-width: 1160px) {
			font-size: 2rem;
		}
	}

	p {
		color: ${({ theme }) => theme.color.base.subtitle};
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 1.3;
	}
`;

export const InfoItems = styled.div`
	padding-top: calc(4.125rem - 1rem);
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.25rem 0;

	/* center items to layout grid */
	justify-content: space-evenly;
	justify-items: center;
	align-content: space-evenly;
	align-items: center;

	/* responsive grid layout */
	--auto-grid-min-size: 16rem;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--auto-grid-min-size), 1fr)
	);
`;

export const InfoItem = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;
	justify-content: flex-start;

	max-width: 35.4375rem;
	width: 100%;

	p {
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.3;
		color: ${({ theme }) => theme.color.base.default};
	}
`;

export const CardsContainer = styled.div`
	display: grid;
	gap: 2rem;
	padding-bottom: calc(9.8125rem - 2rem);

	/* center items to layout grid */
	justify-content: space-evenly;
	justify-items: center;
	align-content: space-evenly;
	align-items: center;

	/* responsive grid layout */
	--auto-grid-min-size: 16rem;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--auto-grid-min-size), 1fr)
	);
`;
