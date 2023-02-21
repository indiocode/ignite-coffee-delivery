/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const PaymentMethodCard = styled.div`
	input {
		display: none;
		visibility: hidden;
		appearance: none;
	}

	label {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		width: 11.1669rem;
		height: 3.1875rem;
		cursor: pointer;
		border: 1px solid transparent;
		border-radius: 6px;
		transition: border-color 0.2s;
		user-select: none;
		background-color: ${({ theme }) => theme.color.base.button};
		font-weight: 400;
		font-size: 0.75rem;
		line-height: 1.6;
		color: ${({ theme }) => theme.color.base.default};

		svg {
			color: ${({ theme }) => theme.color.purple.default};
		}

		&:hover {
			background-color: ${({ theme }) => theme.color.base.hover};
		}
	}

	input:checked ~ label {
		border-color: ${({ theme }) => theme.color.purple.default};
		background-color: ${({ theme }) => theme.color.purple.light};
	}
`;
