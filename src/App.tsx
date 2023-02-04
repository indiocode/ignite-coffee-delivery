import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { Router } from './router';
import { GlobalStyle } from './styles/global';
import { OrderContextProvider } from './contexts/OrderContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
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
