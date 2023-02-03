import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { defaultTheme } from '~/styles/themes/default';
import { Input } from '../Input';
import { PaymentMethod } from '../PaymentMethod';

import * as S from './styles';

export function CompleteForm() {
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
							type="number"
							maxLength={8}
							minLength={8}
							name="zipCode"
						/>
					</S.FormControl>
					<S.FormControl>
						<Input sizeVariant="xl" placeholder="Rua" name="street" />
					</S.FormControl>
					<S.FormControl>
						<Input
							sizeVariant="sm"
							placeholder="Número"
							maxLength={4}
							minLength={4}
							name="number"
						/>
						<Input
							sizeVariant="lg"
							placeholder="Complemento"
							name="complement"
						/>
					</S.FormControl>
					<S.FormControl>
						<Input sizeVariant="sm" placeholder="Bairro" name="district" />
						<Input sizeVariant="md" placeholder="Cidade" name="city" />
						<Input
							sizeVariant="esm"
							placeholder="UF"
							maxLength={2}
							minLength={2}
							name="state"
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
					<PaymentMethod label="Cartão de Débito" id="credit">
						<CreditCard size={16} weight="regular" />
					</PaymentMethod>

					<PaymentMethod label="Cartão de Débito" id="debit">
						<Bank size={16} weight="regular" />
					</PaymentMethod>

					<PaymentMethod label="Dinheiro" id="money">
						<Money size={16} weight="regular" />
					</PaymentMethod>
				</S.PaymentMethodsContainer>
			</S.PrimaryFormGroupContainer>
		</S.CompleteOrderContainer>
	);
}
