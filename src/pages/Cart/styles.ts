import styled from 'styled-components';
import { defaultTheme } from '~/styles/themes/default';

export const CartContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2.5rem 0;

	form {
		width: 100%;
		display: flex;
		gap: 2rem;
	}
`;

const BaseSectionContainer = styled.section`
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

export const CompleteOrderContainer = styled(BaseSectionContainer)`
	max-width: 40rem;
`;

export const ConfirmationOrderContainer = styled(BaseSectionContainer)`
	max-width: 28rem;
`;

const BaseFormGroupContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2.5rem;
	background-color: ${({ theme }) => theme.color.base.card};
`;

export const PrimaryFormGroupContainer = styled(BaseFormGroupContainer)`
	border-radius: 6px;
`;
export const SecondaryFormGroupContainer = styled(BaseFormGroupContainer)`
	border-radius: 6px 44px;

	button {
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

export const PaymentMethodsContainer = styled.div`
	display: flex;
	gap: 0.75rem;
`;

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

export const FormControlContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const FormControl = styled.div`
	display: flex;
	gap: 1rem;
`;

const INPUT_SIZES = defaultTheme.inputs.size;

interface InputProps {
	sizeVariant: keyof typeof INPUT_SIZES;
}

export const Input = styled.input<InputProps>`
	max-width: ${({ theme, sizeVariant }) => theme.inputs.size[sizeVariant]};
	width: 100%;
	border-radius: 4px;
	padding: 0.75rem;
	border: 0;

	font-weight: 400;
	font-size: 0.875rem;
	line-height: 1.3;
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
