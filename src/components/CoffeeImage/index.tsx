import type { ImgHTMLAttributes, ReactElement } from 'react';

import type { IMAGE_SIZE } from './styles';
import { ImageContainer } from './styles';

interface CoffeeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	variantSize: keyof typeof IMAGE_SIZE;
}

export function CoffeeImage({ ...rest }: CoffeeImageProps): ReactElement {
	return <ImageContainer {...rest} loading="lazy" />;
}
