import type { InputHTMLAttributes, ReactElement, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import type { PaymentMethod as PaymentMethodTypes } from '~/models/Order';

import * as S from './styles';

interface PaymentMethodProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	children: ReactNode;
	paymentMethod: PaymentMethodTypes;
}

export function PaymentMethod({
	children,
	label,
	paymentMethod,
	...rest
}: PaymentMethodProps): ReactElement {
	const { register } = useFormContext();
	return (
		<S.PaymentMethodCard>
			<input
				{...rest}
				type="radio"
				id={paymentMethod}
				value={paymentMethod}
				{...register('methodpayment')}
			/>
			<label htmlFor={paymentMethod}>
				{children}
				{label}
			</label>
		</S.PaymentMethodCard>
	);
}
