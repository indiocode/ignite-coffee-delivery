import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	max-width: 90rem;
	margin: 0 auto;
	padding: 0 10rem;

	@media (max-width: 1440px) {
		padding: 0 6rem;
	}

	@media (max-width: 768px) {
		padding: 0 3rem;
	}
`;
