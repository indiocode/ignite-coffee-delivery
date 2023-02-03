import { ShoppingCart } from 'phosphor-react';
import { CoffeeItem } from '~/assets';
import { Coffee } from '~/models/Coffee';
import { formatNumberToMoney } from '~/utils/FormatNumberToMoney';

import { Counter } from '~/components/Counter';

import * as S from './styles';
import { CoffeeImage } from '~/components/CoffeeImage';

interface CardProps {
	coffee: Coffee;
}

export function Card({ coffee }: CardProps) {
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
					<Counter variantSize="large" />
					<S.Cart>
						<ShoppingCart weight="fill" size={16} />
					</S.Cart>
				</S.CartItem>
			</S.CartContainer>
		</S.CardContainer>
	);
}
