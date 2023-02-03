import { InputHTMLAttributes, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import * as S from './styles';

interface PaymentMethodProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	children: ReactNode;
}

export function PaymentMethod({
	children,
	label,
	...rest
}: PaymentMethodProps) {
	const { register } = useFormContext();
	return (
		<S.PaymentMethodCard>
			<input
				{...rest}
				// name="methodpayment"
				type="radio"
				value={rest.id}
				{...register('methodpayment')}
			/>
			<label htmlFor={rest.id}>
				{children}
				{label}
			</label>
		</S.PaymentMethodCard>
	);
}
