import type { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import { OrderContextProvider } from './contexts/OrderContext';
import { Router } from './router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App(): ReactElement {
	return (
		<ThemeProvider theme={defaultTheme}>
			<OrderContextProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</OrderContextProvider>
			<GlobalStyle />
			<ToastContainer theme="colored" />
		</ThemeProvider>
	);
}
