import type { ChangeEvent, InputHTMLAttributes, ReactElement } from 'react';
import { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Mask } from '~/utils/Mask';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	sizeVariant: keyof typeof S.INPUT_SIZES;
	hasError?: boolean;
	mask?: keyof typeof Mask;
}

export function Input({ name, mask, ...rest }: InputProps): ReactElement {
	const { register } = useFormContext();
	const [value, setValue] = useState('');

	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			if (mask) {
				const value = Mask[mask](event.target.value);
				return setValue(value);
			}
		},
		[mask],
	);

	return (
		<S.Input
			{...rest}
			{...register(name as string)}
			onChange={handleChange}
			value={value}
		/>
	);
}
