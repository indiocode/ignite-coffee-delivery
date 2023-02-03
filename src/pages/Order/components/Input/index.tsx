import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	sizeVariant: keyof typeof S.INPUT_SIZES;
}

export function Input({ name, ...rest }: InputProps) {
	const { register } = useFormContext();

	return <S.Input {...rest} {...register(name as string)} />;
}
