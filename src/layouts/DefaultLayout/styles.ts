import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	max-width: 90rem;
	margin: 0 auto;
	padding: 0 10rem;
	background: ${({ theme }) => theme.color.background.default};
`;
