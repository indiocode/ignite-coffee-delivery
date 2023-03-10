import { MapPin, ShoppingCart } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Logo } from '~/assets';
import { OrderContext } from '~/contexts/OrderContext';

import * as S from './styles';

export function Header(): ReactElement {
	const { order } = useContext(OrderContext);

	const existItemsOnOrder = order.items.length > 0;

	return (
		<S.HeaderContainer>
			<nav>
				<NavLink to="/">
					<img src={Logo} loading="lazy" alt="Logo Image" />
				</NavLink>

				<div>
					<span>
						<MapPin size={18} weight="fill" />
						Itacoatiara, AM
					</span>
					<NavLink
						to={existItemsOnOrder ? '/checkout' : '/'}
						onClick={(): void => {
							if (!existItemsOnOrder) {
								toast.error(
									'Por favor, adicione ao menos um item no carrinho!',
								);
							}
						}}
					>
						<ShoppingCart size={18} weight="fill" />
						{existItemsOnOrder && <span>{order.items.length} </span>}
					</NavLink>
				</div>
			</nav>
		</S.HeaderContainer>
	);
}
