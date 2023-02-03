import styled from 'styled-components';

export const HeaderContainer = styled.header`
	top: 0;
	left: 0;
	z-index: 1000;
	position: sticky;
	display: flex;
	padding: 2rem 0;
	/* width: 100%; */
	align-items: center;
	/* background: ${({ theme }) => theme.color.background.default}; */
	background: ${({ theme }) => theme.color.white.default};

	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;

		a,
		span {
			border-radius: 6px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		span {
			padding: 0 0.5rem;
			background-color: ${({ theme }) => theme.color.purple.light};
			color: ${({ theme }) => theme.color.purple.dark};
			line-height: 1.3;
			font-weight: 400;
			font-size: 0.875rem;
			cursor: default;
		}

		div {
			position: relative;
			display: flex;
			gap: 0.75rem;

			a {
				background-color: ${({ theme }) => theme.color.yellow.light};
				color: ${({ theme }) => theme.color.yellow.dark};
				width: 38px;
				height: 38px;
			}

			a span {
				position: absolute;
				right: -8px;
				top: -8px;
				width: 1.25rem;
				height: 1.25rem;
				background-color: ${({ theme }) => theme.color.yellow.dark};
				color: ${({ theme }) => theme.color.background.default};
				border-radius: 50%;
				font-weight: 700;
				font-size: 0.75rem;
				line-height: 1.3;
			}
		}
	}
`;
