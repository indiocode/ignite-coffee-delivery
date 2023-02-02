import styled from 'styled-components';

export const HomeContainer = styled.div`
	main {
		display: flex;
		gap: 3.5rem;
		padding: 5.75rem 0;

		div img {
			width: 29.75rem;
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
	/* height: 192px; */

	h1 {
		color: ${({ theme }) => theme.color.base.title};
		font-size: 3rem;
		font-family: 'Baloo 2', cursive;
		font-weight: 800;
		line-height: 1.3;
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
`;

export const InfoItem = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;
	justify-content: flex-start;

	max-width: 35.4375rem;
	width: 100%;
	/* height: 84px; */

	p {
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.3;
		color: ${({ theme }) => theme.color.base.default};
	}
`;

const BaseCircleItem = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2rem;
	width: 2rem;
	border-radius: 50%;

	svg path {
		color: ${({ theme }) => theme.color.background.default};
	}
`;

export const FirstCircle = styled(BaseCircleItem)`
	background-color: ${({ theme }) => theme.color.yellow.dark};
`;

export const SecondCircle = styled(BaseCircleItem)`
	background-color: ${({ theme }) => theme.color.base.default};
`;

export const ThirdCircle = styled(BaseCircleItem)`
	background-color: ${({ theme }) => theme.color.yellow.default};
`;

export const FourthCircle = styled(BaseCircleItem)`
	background-color: ${({ theme }) => theme.color.purple.default};
`;

export const CardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem 2.5rem;
	padding-bottom: calc(9.8125rem - 2rem);
`;
