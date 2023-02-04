/* eslint-disable no-unused-vars */
import * as S from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { CompleteForm } from './components/CompleteForm';
import { ConfirmationForm } from './components/ConfirmationForm';
import { useContext, useEffect } from 'react';
import { OrderContext } from '~/contexts/OrderContext';
import { Address } from '~/models/Address';
import { toast } from 'react-toastify';

enum PaymentMethods {
	credit = 'credit',
	debit = 'debit',
	money = 'money',
}

const CompleteFormValidationSchema = zod.object({
	zipCode: zod.string().min(8, { message: 'CEP deve conter 8 números' }),
	street: zod.string().min(1, { message: 'Rua deve ser informada!' }),
	number: zod.string().min(1, { message: 'Inform o número de sua casa!' }),
	complement: zod.string().optional(),
	city: zod.string().min(1, { message: 'Cidade deve ser informada!' }),
	state: zod.string().min(1, { message: 'UF deve ser informada!' }),
	district: zod.string().min(1, { message: 'Bairro deve ser informado!' }),
	methodpayment: zod.nativeEnum(PaymentMethods, {
		errorMap: () => {
			return { message: 'Informe método de pagamento!' };
		},
	}),
});

type CompleteFormData = zod.infer<typeof CompleteFormValidationSchema>;

export function Checkout() {
	const navigate = useNavigate();
	const location = useLocation();

	const { addAddressDelivered, addPaymentMethod, order } =
		useContext(OrderContext);

	const completeAddress = useForm<CompleteFormData>({
		resolver: zodResolver(CompleteFormValidationSchema),
	});

	const { handleSubmit, reset } = completeAddress;

	function handleOrderConfimation(data: CompleteFormData) {
		const { methodpayment, ...rest } = data;

		addAddressDelivered(rest as Address);
		addPaymentMethod(methodpayment);

		toast.success('Pedido Efetuado com sucesso!');

		navigate('/confirmation');

		reset();
	}

	const existItemsOnOrder = order.items.length > 0;

	useEffect(() => {
		if (location.pathname === '/checkout' && !existItemsOnOrder) {
			toast.error('O carrinho está vazio!');

			reset();

			navigate('/');
		}
	}, [existItemsOnOrder, location, navigate, order.items.length, reset]);

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
