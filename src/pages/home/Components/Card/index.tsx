import { ShoppingCart } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { CoffeeImage } from '~/components/CoffeeImage';
import { Counter } from '~/components/Counter';
import { OrderContext } from '~/contexts/OrderContext';
import type { Coffee } from '~/models/Coffee';
import type { ItemOrder } from '~/models/Order';
import { formatNumberToMoney } from '~/utils/FormatNumberToMoney';

import * as S from './styles';

interface CardProps {
	coffee: Coffee;
}

export function Card({ coffee }: CardProps): ReactElement {
	const { addNewItem } = useContext(OrderContext);

	const [counter, setCounter] = useState<number>(1);

	function increment(): void {
		setCounter((prev) => prev + 1);
	}

	function decrement(): void {
		setCounter((prev) => (prev > 1 ? prev - 1 : prev));
	}

	function handleAddNewItem(product: Coffee): void {
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
			<CoffeeImage
				src={coffee.image.url}
				alt={`Imagem de um bom ${coffee.name}`}
				variantSize="large"
			/>
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
					<S.Cart onClick={(): void => handleAddNewItem(coffee)}>
						<ShoppingCart weight="fill" size={16} />
					</S.Cart>
				</S.CartItem>
			</S.CartContainer>
		</S.CardContainer>
	);
}
