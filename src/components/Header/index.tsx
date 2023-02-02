import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';

import * as S from './styles';
import { Logo } from '~/assets';

export function Header() {
	return (
		<S.HeaderContainer>
			<nav>
				<NavLink to="/">
					<img src={Logo} />
				</NavLink>

				<div>
					<span>
						<MapPin size={18} weight="fill" />
						Itacoatiara, AM
					</span>
					<NavLink to="/cart">
						<ShoppingCart size={18} weight="fill" />
						<span>2</span>
					</NavLink>
				</div>
			</nav>
		</S.HeaderContainer>
	);
}
