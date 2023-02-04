import { ShoppingCart } from 'phosphor-react';
import { CoffeeItem } from '~/assets';
import { Coffee } from '~/models/Coffee';
import { formatNumberToMoney } from '~/utils/FormatNumberToMoney';

import { Counter } from '~/components/Counter';

import * as S from './styles';
import { CoffeeImage } from '~/components/CoffeeImage';
import { useContext, useState } from 'react';
import { OrderContext } from '~/contexts/OrderContext';
import { ItemOrder } from '~/models/Order';
import { toast } from 'react-toastify';

interface CardProps {
	coffee: Coffee;
}

export function Card({ coffee }: CardProps) {
	const { addNewItem } = useContext(OrderContext);

	const [counter, setCounter] = useState<number>(1);

	function increment() {
		setCounter((prev) => prev + 1);
	}

	function decrement() {
		setCounter((prev) => (prev > 1 ? prev - 1 : prev));
	}

	function handleAddNewItem(product: Coffee) {
		const newItemOrder: ItemOrder = {
			product,
			quantity: counter,
		};

		addNewItem(newItemOrder);

		toast.success('Item adicionado ao carrinho!');

		setCounter(1);
	}

	return (
		<S.CardContainer>
			<CoffeeImage src={CoffeeItem} alt="Image de Café" variantSize="large" />
			<S.Tags>
				{coffee.tags.length > 0 &&
					coffee.tags.map((tag) => <span key={tag}>{tag}</span>)}
			</S.Tags>
			<S.Info>
				<h1>{coffee.name}</h1>
				<p>{coffee.description}</p>
			</S.Info>
			<S.CartContainer>
				<span>
					R$ <strong>{formatNumberToMoney(coffee.price)}</strong>
				</span>
				<S.CartItem>
					<Counter
						counter={counter}
						variantSize="large"
						acrease={increment}
						decrease={decrement}
					/>
					<S.Cart onClick={() => handleAddNewItem(coffee)}>
						<ShoppingCart weight="fill" size={16} />
					</S.Cart>
				</S.CartItem>
			</S.CartContainer>
		</S.CardContainer>
	);
}
