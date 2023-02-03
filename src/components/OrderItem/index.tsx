import * as S from './styles';

import { Counter } from '~/components/Counter';
import { Trash } from 'phosphor-react';
import { CoffeeItem } from '~/assets';
import { CoffeeImage } from '~/components/CoffeeImage';

export function OrderItem() {
	return (
		<S.OrderItem>
			<S.OrderInfo>
				<CoffeeImage src={CoffeeItem} alt="Coffee Image" variantSize="small" />
				<S.OrderDetail>
					<h2>Expresso Tradicional</h2>
					<S.OrderCart>
						<Counter variantSize="small" />
						<button>
							<Trash size={16} />
							remover
						</button>
					</S.OrderCart>
				</S.OrderDetail>
			</S.OrderInfo>
			<span>R$ 9,90</span>
		</S.OrderItem>
	);
}
