import { ImgHTMLAttributes } from 'react';
import { ImageContainer, IMAGE_SIZE } from './styles';

interface CoffeeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	variantSize: keyof typeof IMAGE_SIZE;
}

export function CoffeeImage({ ...rest }: CoffeeImageProps) {
	return <ImageContainer {...rest} loading="lazy" />;
}
