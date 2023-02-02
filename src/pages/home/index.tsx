import { CoffeeImage } from '~/assets';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { Card } from '~/components/Card';
import { coffeeList } from '~/data/Coffee';

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
							<S.FirstCircle>
								<ShoppingCart weight="fill" size={16} />
							</S.FirstCircle>
							<p>Compra simples e segura</p>
						</S.InfoItem>
						<S.InfoItem>
							<S.SecondCircle>
								<Package size={16} weight="fill" />
							</S.SecondCircle>
							<p>Embalagem mantém o café intacto</p>
						</S.InfoItem>
						<S.InfoItem>
							<S.ThirdCircle>
								<Timer size={16} weight="fill" />
							</S.ThirdCircle>
							<p>Entrega rápida e rastreada</p>
						</S.InfoItem>
						<S.InfoItem>
							<S.FourthCircle>
								<Coffee size={16} weight="fill" />
							</S.FourthCircle>
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
