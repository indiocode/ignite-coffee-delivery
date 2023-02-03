import * as S from './styles';

import { Counter } from '~/components/Counter';
import { Trash } from 'phosphor-react';
import { CoffeeItem } from '~/assets';
import { CoffeeImage } from '~/components/CoffeeImage';
import { useContext, useEffect, useState } from 'react';
import { OrderContext } from '~/contexts/OrderContext';
import { ItemOrder } from '~/models/Order';
import { formatNumberToMoney } from '~/utils/FormatNumberToMoney';

interface OrderItemProps {
	orderItem: ItemOrder;
}

export function OrderItem({ orderItem }: OrderItemProps) {
	const { removeOneItem, addNewItem, removeItem } = useContext(OrderContext);

	const [counter, setCounter] = useState<number>(orderItem.quantity);

	function increment() {
		setCounter((prev) => prev + 1);
		addNewItem(orderItem);
	}

	function decrement() {
		setCounter((prev) => (prev > 0 ? prev - 1 : prev));
		removeOneItem(orderItem);
	}

	function handleRemoveItem() {
		removeItem(orderItem);
	}

	const totalOrderItem = orderItem.product.price * orderItem.quantity;

	useEffect(() => {
		if (counter === 0) {
			handleRemoveItem();
		}
	}, [counter]);

	return (
		<S.OrderItem>
			<S.OrderInfo>
				<CoffeeImage src={CoffeeItem} alt="Coffee Image" variantSize="small" />
				<S.OrderDetail>
					<h2>{orderItem.product.name}</h2>
					<S.OrderCart>
						<Counter
							counter={counter}
							decrease={decrement}
							acrease={increment}
							variantSize="small"
						/>
						<button onClick={handleRemoveItem}>
							<Trash size={16} />
							remover
						</button>
					</S.OrderCart>
				</S.OrderDetail>
			</S.OrderInfo>
			<span>R$ {formatNumberToMoney(totalOrderItem)}</span>
		</S.OrderItem>
	);
}
