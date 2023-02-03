import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { CompleteForm } from './components/CompleteForm';
import { ConfirmationForm } from './components/ConfirmationForm';
import { useContext } from 'react';
import { OrderContext } from '~/contexts/OrderContext';
import { Address } from '~/models/Address';

const CompleteFormValidationSchema = zod.object({
	zipCode: zod.string(),
	street: zod.string(),
	number: zod.string(),
	complement: zod.string().optional(),
	city: zod.string(),
	state: zod.string(),
	district: zod.string(),
	methodpayment: zod.enum(['credit', 'debit', 'money']),
});

type CompleteFormData = zod.infer<typeof CompleteFormValidationSchema>;

export function Order() {
	const navigation = useNavigate();

	const { addAddressDelivered, addPaymentMethod } = useContext(OrderContext);

	const completeAddress = useForm<CompleteFormData>({
		resolver: zodResolver(CompleteFormValidationSchema),
	});

	const { handleSubmit, reset } = completeAddress;

	function handleOrderConfimation(data: CompleteFormData) {
		const { methodpayment, ...rest } = data;

		addAddressDelivered(rest as Address);
		addPaymentMethod(methodpayment);

		navigation('/confirmation');

		reset();
	}

	return (
		<S.CartContainer>
			<FormProvider {...completeAddress}>
				<form onSubmit={handleSubmit(handleOrderConfimation)}>
					<CompleteForm />
					<ConfirmationForm />
				</form>
			</FormProvider>
		</S.CartContainer>
	);
}
