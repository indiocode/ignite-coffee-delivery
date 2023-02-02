import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
	Trash,
} from 'phosphor-react';
import { defaultTheme } from '~/styles/themes/default';
import { CoffeeItem } from '~/assets';

import * as S from './styles';
import { Counter } from '~/components/Counter';
import { OrderItem } from '~/components/OrderItem';

export function Cart() {
	return (
		<S.CartContainer>
			<form>
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
								<S.Input type="text" placeholder="CEP" sizeVariant="sm" />
							</S.FormControl>
							<S.FormControl>
								<S.Input type="text" placeholder="Rua" sizeVariant="xl" />
							</S.FormControl>
							<S.FormControl>
								<S.Input type="text" placeholder="Número" sizeVariant="sm" />
								<S.Input type="text" placeholder="Completo" sizeVariant="lg" />
							</S.FormControl>
							<S.FormControl>
								<S.Input type="text" placeholder="Bairro" sizeVariant="sm" />
								<S.Input type="text" placeholder="Cidade" sizeVariant="md" />
								<S.Input type="text" placeholder="UF" sizeVariant="esm" />
							</S.FormControl>
						</S.FormControlContainer>
					</S.PrimaryFormGroupContainer>

					<S.PrimaryFormGroupContainer>
						<S.HeaderFormGroup>
							<CurrencyDollar
								size={22}
								color={defaultTheme.color.purple.default}
							/>
							<S.InfoFormGroup>
								<h2>Pagamento</h2>
								<p>
									O pagamento é feito na entrega. Escolha a forma que deseja
									pagar
								</p>
							</S.InfoFormGroup>
						</S.HeaderFormGroup>
						<S.PaymentMethodsContainer>
							<S.PaymentMethodCard>
								<input type="radio" id="credit" name="methodpayment" />
								<label htmlFor="credit">
									<CreditCard size={16} weight="regular" />
									Cartão de Crédito
								</label>
							</S.PaymentMethodCard>

							<S.PaymentMethodCard>
								<input type="radio" id="debit" name="methodpayment" />
								<label htmlFor="debit">
									<Bank size={16} weight="regular" />
									Cartão de Crédito
								</label>
							</S.PaymentMethodCard>

							<S.PaymentMethodCard>
								<input type="radio" id="money" name="methodpayment" />
								<label htmlFor="money">
									<Money size={16} weight="regular" />
									Dinheiro
								</label>
							</S.PaymentMethodCard>
						</S.PaymentMethodsContainer>
					</S.PrimaryFormGroupContainer>
				</S.CompleteOrderContainer>

				<S.ConfirmationOrderContainer>
					<h1>Cafés selecionados</h1>
					<S.SecondaryFormGroupContainer>
						<OrderItem />
						<OrderItem />

						<S.OrderTotalInfo>
							<S.OrderTotalDetails>
								<span>Total de itens</span>
								<span>R$ 29,70</span>
							</S.OrderTotalDetails>
							<S.OrderTotalDetails>
								<span>Entrega</span>
								<span>R$ 3,50</span>
							</S.OrderTotalDetails>
							<S.OrderTotalDetailsBold>
								<span>Total</span>
								<span>R$ 33,20</span>
							</S.OrderTotalDetailsBold>
						</S.OrderTotalInfo>

						<button type="submit"> Confirmar Pedido</button>
					</S.SecondaryFormGroupContainer>
				</S.ConfirmationOrderContainer>
			</form>
		</S.CartContainer>
	);
}
