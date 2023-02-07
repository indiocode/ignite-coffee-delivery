import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from 'phosphor-react';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { defaultTheme } from '~/styles/themes/default';
import { Mask } from '~/utils/Mask';
import { Input } from '../Input';
import { PaymentMethod } from '../PaymentMethod';

import * as S from './styles';

export function CompleteForm() {
	const location = useLocation();

	const {
		formState: { errors },
	} = useFormContext();

	const arrayErrors = Object.keys(errors);

	const hasErrors = arrayErrors.length > 0;

	// useEffect(() => {

	// }, [hasErrors, location]);

	return (
		<S.CompleteOrderContainer>
			<h1>Complete seu pedido</h1>
			<S.PrimaryFormGroupContainer>
				<S.HeaderFormGroup>
					<MapPinLine size={22} color={defaultTheme.color.yellow.dark} />
					<S.InfoFormGroup>
						<h2>Endereço da Entrega</h2>
						<p>Informe o endereço onde deseja receber seu pedido</p>
					</S.InfoFormGroup>
				</S.HeaderFormGroup>

				<S.FormControlContainer>
					<S.FormControl>
						<Input
							sizeVariant="sm"
							placeholder="CEP"
							type="text"
							maxLength={8}
							minLength={8}
							name="zipCode"
							mask="cep"
							hasError={String(errors['zipCode']?.message).length > 0}
						/>
					</S.FormControl>
					<S.FormControl>
						<Input
							sizeVariant="xl"
							placeholder="Rua"
							name="street"
							mask="letter"
							type="text"
							hasError={String(errors['street']?.message).length > 0}
						/>
					</S.FormControl>
					<S.FormControl>
						<Input
							sizeVariant="sm"
							placeholder="Número"
							maxLength={4}
							minLength={4}
							name="number"
							mask="number"
							type="text"
							hasError={String(errors['number']?.message).length > 0}
						/>
						<Input
							sizeVariant="lg"
							placeholder="Complemento"
							name="complement"
							mask="letter"
							type="text"
						/>
					</S.FormControl>
					<S.FormControl>
						<Input
							sizeVariant="sm"
							placeholder="Bairro"
							name="district"
							mask="letter"
							type="text"
							hasError={String(errors['district']?.message).length > 0}
						/>
						<Input
							sizeVariant="md"
							placeholder="Cidade"
							name="city"
							mask="letter"
							type="text"
							hasError={String(errors['city']?.message).length > 0}
						/>
						<Input
							sizeVariant="esm"
							placeholder="UF"
							maxLength={2}
							minLength={2}
							type="text"
							name="state"
							mask="uppercase"
							hasError={String(errors['state']?.message).length > 0}
						/>
					</S.FormControl>
				</S.FormControlContainer>
			</S.PrimaryFormGroupContainer>

			<S.PrimaryFormGroupContainer>
				<S.HeaderFormGroup>
					<CurrencyDollar size={22} color={defaultTheme.color.purple.default} />
					<S.InfoFormGroup>
						<h2>Pagamento</h2>
						<p>
							O pagamento é feito na entrega. Escolha a forma que deseja pagar
						</p>
					</S.InfoFormGroup>
				</S.HeaderFormGroup>
				<S.PaymentMethodsContainer>
					<PaymentMethod label="Cartão de Crédito" paymentMethod="credit">
						<CreditCard size={16} weight="regular" />
					</PaymentMethod>

					<PaymentMethod label="Cartão de Débito" paymentMethod="debit">
						<Bank size={16} weight="regular" />
					</PaymentMethod>

					<PaymentMethod label="Dinheiro" paymentMethod="money">
						<Money size={16} weight="regular" />
					</PaymentMethod>
				</S.PaymentMethodsContainer>
			</S.PrimaryFormGroupContainer>
		</S.CompleteOrderContainer>
	);
}
