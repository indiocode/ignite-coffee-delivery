import styled from 'styled-components';
import { BaseFormGroupContainer, BaseSectionContainer } from '../../styles';

export const ConfirmationOrderContainer = styled(BaseSectionContainer)`
	max-width: 28rem;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

export const SecondaryFormGroupContainer = styled(BaseFormGroupContainer)`
	border-radius: 6px 44px;

	> button {
		border: 0;
		height: 2.875rem;
		background-color: ${({ theme }) => theme.color.yellow.default};
		color: ${({ theme }) => theme.color.white.default};
		font-weight: 700;
		font-size: 0.875rem;
		line-height: 1.6;
		cursor: pointer;
		border: 1px solid transparent;
		border-radius: 6px;
	}
`;

export const OrderTotalInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

const BaseOrderTotalDetails = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const OrderTotalDetails = styled(BaseOrderTotalDetails)`
	font-weight: 400;
	font-size: 0.875rem;
	line-height: 1.3;
`;

export const OrderTotalDetailsBold = styled(BaseOrderTotalDetails)`
	font-weight: 700;
	font-size: 1.25rem;
	line-height: 1.3;
`;
