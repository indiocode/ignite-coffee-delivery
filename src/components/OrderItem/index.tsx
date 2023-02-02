import * as S from './styles';

import { Counter } from '~/components/Counter';
import { Trash } from 'phosphor-react';
import { CoffeeItem } from '~/assets';
import { CoffeeImage } from '~/components/CoffeeImage';

export function OrderItem() {
	return (
		<S.OrderItem>
			<CoffeeImage src={CoffeeItem} alt="" variantSize="small" />
			<S.OrderInfo>
				<h2>Expresso Tradicional</h2>
				<S.OrderCart>
					<Counter />
					<button>
						<Trash size={16} />
						remover
					</button>
				</S.OrderCart>
			</S.OrderInfo>
			<span>R$ 9,90</span>
		</S.OrderItem>
	);
}
