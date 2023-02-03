import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	max-width: 90rem;
	margin: 0 auto;
	padding: 0 10rem;
	/* background: ${({ theme }) => theme.color.background.default}; */

	@media (max-width: 1440px) {
		padding: 0 6rem;
	}

	@media (max-width: 1312px) {
		padding: 0 4rem;
	}

	@media (max-width: 1250px) {
		padding: 0 8rem;
	}

	@media (max-width: 1090px) {
		padding: 0 4rem;
	}

	@media (max-width: 960px) {
		padding: 0 8rem;
	}

	@media (max-width: 800px) {
		padding: 0 6rem;
	}

	@media (max-width: 645px) {
		padding: 0 4rem;
	}

	@media (max-width: 590px) {
		padding: 0 2rem;
	}
`;
