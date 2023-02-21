/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

import { BaseFormGroupContainer, BaseSectionContainer } from '../../styles';

export const CompleteOrderContainer = styled(BaseSectionContainer)`
	max-width: 40rem;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

export const PrimaryFormGroupContainer = styled(BaseFormGroupContainer)`
	border-radius: 6px;
`;

export const HeaderFormGroup = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const InfoFormGroup = styled.div`
	h2 {
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.3;
		color: ${({ theme }) => theme.color.base.subtitle};
	}

	p {
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 1.3;
	}
`;

export const FormControlContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const FormControl = styled.div`
	display: flex;
	gap: 1rem;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const PaymentMethodsContainer = styled.div`
	display: flex;
	gap: 0.75rem;

	flex-wrap: wrap;
`;
