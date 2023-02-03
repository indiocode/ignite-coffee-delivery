import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { CompleteForm } from './components/CompleteForm';
import { ConfirmationForm } from './components/ConfirmationForm';
import { useContext } from 'react';
import { OrderContext } from '~/contexts/OrderContext';

const completeAddressFormValidationSchema = zod.object({
	zipCode: zod.string(),
	street: zod.string(),
	number: zod.string(),
	complement: zod.string().optional(),
	city: zod.string(),
	state: zod.string(),
	district: zod.string(),
	methodpayment: zod.string(),
});

type CompleteAddressFormData = zod.infer<
	typeof completeAddressFormValidationSchema
>;

export function Order() {
	const navigation = useNavigate();

	const { addAddressDelivered } = useContext(OrderContext);

	const completeAddress = useForm<CompleteAddressFormData>({
		resolver: zodResolver(completeAddressFormValidationSchema),
	});

	const { handleSubmit, reset } = completeAddress;

	function handleOrderConfimation(data: CompleteAddressFormData) {
		navigation('/confirmation');

		const { methodpayment, ...rest } = data;

		addAddressDelivered(rest);

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
