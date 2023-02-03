import styled from 'styled-components';

export const ConfirmationContainer = styled.div`
	display: flex;
	justify-content: space-between;
	/* padding: 2.5rem 0; */
`;

const BaseSectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	/* gap: 0.75rem; */
	width: 100%;
`;

export const ConfirmationDetailsContainer = styled(BaseSectionContainer)`
	max-width: 32.875rem;

	h1 {
		font-family: 'Baloo 2', cursive;
		color: ${({ theme }) => theme.color.yellow.dark};
		font-weight: 800;
		font-size: 2rem;
		line-height: 1.3;
	}
`;

export const Details = styled.div`
	margin-top: 1.75rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	position: relative;
	padding: 2.5rem;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 6px 36px;
		padding: 1px;
		background: linear-gradient(45deg, #dbac2c, #8047f8);
		-webkit-mask: linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: ex;
	}
`;

export const ConfirmationDetailsItem = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ImageContainer = styled(BaseSectionContainer)`
	padding-top: 3.625rem;
	width: 492px;
	height: 293px;
`;

export const InfoItem = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;
	justify-content: flex-start;

	max-width: 35.4375rem;
	width: 100%;
	/* height: 84px; */

	p {
		font-weight: 400;
		font-size: 1rem;
		line-height: 1pc;
		color: ${({ theme }) => theme.color.base.default};
	}
`;

export const DetailItem = styled.div`
	display: flex;
	flex-direction: column;
`;
