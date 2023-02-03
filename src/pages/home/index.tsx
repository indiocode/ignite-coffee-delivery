import { CoffeeImage } from '~/assets';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { Card } from '~/components/Card';
import { coffeeList } from '~/data/Coffee';
import { CircleIcon } from '~/components/CircleIcon';

import * as S from './styles';

export function Home() {
	return (
		<S.HomeContainer>
			<main>
				<S.HomeMainInfo>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>
						Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>
					<S.InfoItems>
						<S.InfoItem>
							<CircleIcon type="tertiary">
								<ShoppingCart weight="fill" size={16} />
							</CircleIcon>
							<p>Compra simples e segura</p>
						</S.InfoItem>
						<S.InfoItem>
							<CircleIcon type="default">
								<Package size={16} weight="fill" />
							</CircleIcon>
							<p>Embalagem mantém o café intacto</p>
						</S.InfoItem>
						<S.InfoItem>
							<CircleIcon type="secondary">
								<Timer size={16} weight="fill" />
							</CircleIcon>
							<p>Entrega rápida e rastreada</p>
						</S.InfoItem>
						<S.InfoItem>
							<CircleIcon type="primary">
								<Coffee size={16} weight="fill" />
							</CircleIcon>
							<p>O café chega fresquinho até você</p>
						</S.InfoItem>
					</S.InfoItems>
				</S.HomeMainInfo>
				<div>
					<img src={CoffeeImage} alt="Recepiente térmico de café" />
				</div>
			</main>

			<section>
				<h1>Nossos cafés</h1>
				<S.CardsContainer>
					{coffeeList.map((coffee) => (
						<Card coffee={coffee} key={coffee.id} />
					))}
				</S.CardsContainer>
			</section>
		</S.HomeContainer>
	);
}
