import styled from 'styled-components';

export const Container = styled.div`
	max-width: 90rem;
	margin: 0 auto;
	padding: 2rem 10rem;
	background: ${({ theme }) => theme.color.background.default};
`;
