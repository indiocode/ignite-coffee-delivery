import { ShoppingCart } from 'phosphor-react';
import { Delivery } from '~/assets';
import { CircleIcon } from '~/components/CircleIcon';
import * as S from './styles';

export function Confirmation() {
	return (
		<S.ConfirmationContainer>
			<S.ConfirmationDetailsContainer>
				<h1>Uhu! Pedido confirmado</h1>
				<p>Agora é só aguardar que logo o café chegará até você</p>

				<S.Details>
					<S.ConfirmationDetailsItem>
						<S.InfoItem>
							<CircleIcon type="primary">
								<ShoppingCart weight="fill" size={16} />
							</CircleIcon>
							<S.DetailItem>
								<p>
									Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
								</p>
								<span>Farrapos - Porto Alegre, RS</span>
							</S.DetailItem>
						</S.InfoItem>
					</S.ConfirmationDetailsItem>

					<S.ConfirmationDetailsItem>
						<S.InfoItem>
							<CircleIcon type="secondary">
								<ShoppingCart weight="fill" size={16} />
							</CircleIcon>
							<S.DetailItem>
								<p>Previsão de entrega</p>
								<span> 20 min - 30 min</span>
							</S.DetailItem>
						</S.InfoItem>
					</S.ConfirmationDetailsItem>
					<S.ConfirmationDetailsItem>
						<S.InfoItem>
							<CircleIcon type="tertiary">
								<ShoppingCart weight="fill" size={16} />
							</CircleIcon>
							<S.DetailItem>
								<p>Pagamento na entrega </p>
								<span> Cartão de Crédito</span>
							</S.DetailItem>
						</S.InfoItem>
					</S.ConfirmationDetailsItem>
				</S.Details>
			</S.ConfirmationDetailsContainer>

			<S.ImageContainer>
				<img src={Delivery} alt="" />
			</S.ImageContainer>
		</S.ConfirmationContainer>
	);
}
