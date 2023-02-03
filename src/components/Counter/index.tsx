import { Minus, Plus } from 'phosphor-react';

import { CounterContainer, COUNTER_SIZE } from './styles';

interface CounterProps {
	variantSize: keyof typeof COUNTER_SIZE;
	counter: number;
	decrease: () => void;
	acrease: () => void;
}

export function Counter({ counter, decrease, acrease, ...rest }: CounterProps) {
	return (
		<CounterContainer {...rest}>
			<button onClick={decrease} type="button">
				<Minus size={16} weight="fill" />
			</button>
			<span>{counter}</span>
			<button onClick={acrease} type="button">
				<Plus size={16} weight="fill" />
			</button>
		</CounterContainer>
	);
}
