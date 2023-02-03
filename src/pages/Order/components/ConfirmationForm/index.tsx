import { useContext } from 'react';
import { OrderContext } from '~/contexts/OrderContext';
import { formatNumberToMoney } from '~/utils/FormatNumberToMoney';
import { OrderItem } from '../OrderItem';
import * as S from './styles';

export function ConfirmationForm() {
	const { order } = useContext(OrderContext);

	const existItemsOnOrder = order.items.length > 0;

	const deliveredCost = existItemsOnOrder ? 3.5 : 0;

	const totalOrderItems = order.items.reduce(
		(total, item) => total + item.product.price * item.quantity,
		0,
	);

	const totalOrder = totalOrderItems + deliveredCost;

	return (
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

				<button type="submit">Confirmar Pedido</button>
			</S.SecondaryFormGroupContainer>
		</S.ConfirmationOrderContainer>
	);
}
