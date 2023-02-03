import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from 'phosphor-react';
import { defaultTheme } from '~/styles/themes/default';

import * as S from './styles';
import { OrderItem } from '~/components/OrderItem';
import { useNavigate } from 'react-router-dom';
import { PaymentMethod } from '~/components/PaymentMethod';
import { ChangeEvent, useContext } from 'react';
import { OrderContext } from '~/contexts/OrderContext';
import { formatNumberToMoney } from '~/utils/FormatNumberToMoney';

export function Order() {
	const navigation = useNavigate();

	const { order } = useContext(OrderContext);

	function handleNavigateToConfirmationPage() {
		navigation('/confirmation');
	}

	const existItemsOnOrder = order.items.length > 0;

	const deliveredCost = 3.5;

	const totalOrderItems = order.items.reduce(
		(total, item) => total + item.product.price * item.quantity,
		0,
	);

	const totalOrder = totalOrderItems + deliveredCost;

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
								<S.Input
									type="text"
									placeholder="CEP"
									sizeVariant="sm"
									name="cep"
								/>
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

				<S.ConfirmationOrderContainer>
					<h1>Cafés selecionados</h1>
					<S.SecondaryFormGroupContainer>
						{existItemsOnOrder &&
							order.items.map((item) => (
								<OrderItem orderItem={item} key={item.product.id} />
							))}

						<S.OrderTotalInfo>
							<S.OrderTotalDetails>
								<span>Total de itens</span>
								<span>R$ {formatNumberToMoney(totalOrderItems)}</span>
							</S.OrderTotalDetails>
							<S.OrderTotalDetails>
								<span>Entrega</span>
								<span>R$ {formatNumberToMoney(deliveredCost)}</span>
							</S.OrderTotalDetails>
							<S.OrderTotalDetailsBold>
								<span>Total</span>
								<span>R$ {formatNumberToMoney(totalOrder)}</span>
							</S.OrderTotalDetailsBold>
						</S.OrderTotalInfo>

						<button type="submit" onClick={handleNavigateToConfirmationPage}>
							Confirmar Pedido
						</button>
					</S.SecondaryFormGroupContainer>
				</S.ConfirmationOrderContainer>
			</form>
		</S.CartContainer>
	);
}
