import styled from 'styled-components';
import { defaultTheme } from '~/styles/themes/default';

export const IMAGE_SIZE = defaultTheme.image.size;

interface ImageProps {
	variantSize: keyof typeof IMAGE_SIZE;
}

export const ImageContainer = styled.img<ImageProps>`
	width: ${({ theme, variantSize }) => theme.image.size[variantSize]};
	height: ${({ theme, variantSize }) => theme.image.size[variantSize]};
`;
