import styled from 'styled-components';

export const OrderItem = styled.div`
	display: flex;
	gap: 1.25rem;
	padding: 1.5rem 0;

	> span {
		padding-left: calc(3.125rem - 1.25rem);
		font-weight: 700;
		font-size: 1rem;
		line-height: 130%;
	}

	border-bottom: 1px solid ${({ theme }) => theme.color.base.button};

	:first-child {
		padding-top: calc(0px - 2.5rem - 1.5rem);
	}
`;

export const OrderInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	h2 {
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.3;
	}
`;

export const OrderCart = styled.div`
	display: flex;
	gap: 0.5rem;

	button {
		display: flex;
		gap: 0.25rem;
		width: 5.6875rem;
		height: 2rem;
		text-transform: uppercase;
		font-weight: 400;
		font-size: 0.75rem;
		line-height: 1.6;
		border: 1px solid transparent;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.color.base.button};
		color: ${({ theme }) => theme.color.base.default};
		cursor: pointer;
		border-radius: 6px;

		svg {
			color: ${({ theme }) => theme.color.purple.default};
		}
	}
`;
