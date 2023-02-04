import * as S from './styles';

import { Counter } from '~/components/Counter';
import { Trash } from 'phosphor-react';
import { CoffeeImage } from '~/components/CoffeeImage';
import { useCallback, useContext, useEffect, useState } from 'react';
import { OrderContext } from '~/contexts/OrderContext';
import { ItemOrder } from '~/models/Order';
import { formatNumberToMoney } from '~/utils/FormatNumberToMoney';

interface OrderItemProps {
	orderItem: ItemOrder;
}

export function OrderItem({ orderItem }: OrderItemProps) {
	const { removeOneItem, addOneItem, removeItem } = useContext(OrderContext);

	const [counter, setCounter] = useState<number>(orderItem.quantity);

	function increment() {
		setCounter((prev) => prev + 1);
		addOneItem(orderItem);
	}

	function decrement() {
		setCounter((prev) => (prev > 0 ? prev - 1 : prev));
		removeOneItem(orderItem);
	}

	const handleRemoveItem = useCallback(() => {
		removeItem(orderItem);
	}, [orderItem, removeItem]);

	const totalOrderItem = orderItem.product.price * orderItem.quantity;

	useEffect(() => {
		if (counter === 0) {
			handleRemoveItem();
		}
	}, [counter, handleRemoveItem]);

	return (
		<S.OrderItem>
			<S.OrderInfo>
				<CoffeeImage
					src={orderItem.product.image.url}
					alt="Coffee Image"
					variantSize="small"
				/>
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
