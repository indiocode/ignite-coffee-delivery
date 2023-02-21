import { MapPin, Money, Timer } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Delivery } from '~/assets';
import { CircleIcon } from '~/components/CircleIcon';
import { OrderContext } from '~/contexts/OrderContext';
import type { PaymentMethod } from '~/models/Order';

import * as S from './styles';

export function Confirmation(): ReactElement {
	const navigate = useNavigate();
	const location = useLocation();

	const { order, finishedOrder } = useContext(OrderContext);

	const { address, paymentMethod } = order;

	const PAYMENT_METHODS = {
		debit: 'Cartão de Débito',
		credit: 'Cartão de Crédito',
		money: 'Dinheiro',
	};

	useEffect(() => {
		if (location.pathname === '/confirmation') {
			setTimeout(() => {
				finishedOrder();

				toast.success(
					'Obrigado por estar conosco, ficamos felizes por nos escolher.',
				);
				navigate('/');
			}, 8000);
		}
	});

	return (
		<S.ConfirmationContainer>
			<S.ConfirmationDetailsContainer>
				<h1>Uhu! Pedido confirmado</h1>
				<p>Agora é só aguardar que logo o café chegará até você</p>

				<S.Details>
					<S.ConfirmationDetailsItem>
						<S.InfoItem>
							<CircleIcon type="primary">
								<MapPin weight="fill" size={16} />
							</CircleIcon>
							<S.DetailItem>
								<p>
									Entrega em{' '}
									<strong>
										{address?.street}, {address?.number}
									</strong>
								</p>
								<span>
									{address?.district} - {address?.city}, {address?.state}
								</span>
							</S.DetailItem>
						</S.InfoItem>
					</S.ConfirmationDetailsItem>

					<S.ConfirmationDetailsItem>
						<S.InfoItem>
							<CircleIcon type="secondary">
								<Timer weight="fill" size={16} />
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
								<Money size={16} />
							</CircleIcon>
							<S.DetailItem>
								<p>Pagamento na entrega </p>
								<span>{PAYMENT_METHODS[paymentMethod as PaymentMethod]}</span>
							</S.DetailItem>
						</S.InfoItem>
					</S.ConfirmationDetailsItem>
				</S.Details>
			</S.ConfirmationDetailsContainer>

			<S.ImageContainer>
				<img src={Delivery} alt="Delivery Image" loading="lazy" />
			</S.ImageContainer>
		</S.ConfirmationContainer>
	);
}
