import { Money } from 'phosphor-react';
import { InputHTMLAttributes, ReactNode } from 'react';
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
	return (
		<S.PaymentMethodCard>
			<input {...rest} name="methodpayment" type="radio" value={rest.id} />
			<label htmlFor={rest.id}>
				{children}
				{label}
			</label>
		</S.PaymentMethodCard>
	);
}
