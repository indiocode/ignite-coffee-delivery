import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 16rem;
	height: 19.375rem;
	background-color: ${({ theme }) => theme.color.base.card};
	border-radius: 6px 36px;
	padding: 1.25rem;
	gap: 0.75rem;

	/* CoffeImage Component Position */
	img {
		margin-top: calc(0px - 1.25rem * 2);
	}
`;

export const Tags = styled.div`
	display: flex;
	gap: 0.25rem;

	span {
		padding: 0.25rem 0.5rem;
		text-transform: uppercase;
		background-color: ${({ theme }) => theme.color.yellow.light};
		color: ${({ theme }) => theme.color.yellow.dark};
		border-radius: 100px;
		font-weight: 700;
		font-size: 0.625rem;
	}
`;

export const Info = styled.div`
	padding-top: calc(0px - 1rem - 0.75rem);
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	gap: 0.5rem;

	h1 {
		color: ${({ theme }) => theme.color.base.subtitle};
		font-family: 'Baloo 2', cursive;
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.3;
	}

	p {
		color: ${({ theme }) => theme.color.base.label};
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 1.3;
	}
`;

export const CartContainer = styled.div`
	padding: calc(2.0625rem - 0.75rem) 0.25rem 0;
	width: 100%;
	display: flex;
	justify-content: space-between;

	span {
		font-size: 0.875rem;

		strong {
			font-family: 'Baloo 2', cursive;
			font-weight: 800;
			font-size: 1.5rem;
		}
	}
`;

export const CartItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const Cart = styled.span`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	width: 2.375rem;
	height: 2.375rem;
	background-color: ${({ theme }) => theme.color.purple.dark};
	svg path {
		color: ${({ theme }) => theme.color.background.default};
	}

	&:hover {
		background-color: ${({ theme }) => theme.color.purple.default};
	}
`;
