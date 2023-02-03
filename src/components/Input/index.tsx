import { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	mask?: string | (string | RegExp)[];
	sizeVariant: keyof typeof S.INPUT_SIZES;
}

export function Input({ mask = '', ...rest }: InputProps) {
	return <S.InputMasked mask={mask} {...rest} />;
}
