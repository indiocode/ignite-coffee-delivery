import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Order } from './pages/Order';
import { Home } from './pages/home';
import { Confirmation } from './pages/Confirmation';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Order />} />
				<Route path="/confirmation" element={<Confirmation />} />
			</Route>
		</Routes>
	);
}
