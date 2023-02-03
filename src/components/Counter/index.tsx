import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';

import { CounterContainer, COUNTER_SIZE } from './styles';

interface CounterProps {
	variantSize: keyof typeof COUNTER_SIZE;
}

export function Counter({ ...rest }: CounterProps) {
	const [counter, setCounter] = useState<number>(1);

	function increment() {
		setCounter((prev) => prev + 1);
	}

	function decrement() {
		setCounter((prev) => (prev > 1 ? prev - 1 : prev));
	}

	return (
		<CounterContainer {...rest}>
			<button onClick={decrement} type="button">
				<Minus size={16} weight="fill" />
			</button>
			<span>{counter}</span>
			<button onClick={increment} type="button">
				<Plus size={16} weight="fill" />
			</button>
		</CounterContainer>
	);
}
