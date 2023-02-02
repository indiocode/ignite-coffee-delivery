import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';

import * as S from './styles';

export function Counter() {
	const [counter, setCounter] = useState<number>(1);

	function increment() {
		setCounter((prev) => prev + 1);
	}

	function decrement() {
		setCounter((prev) => (prev > 1 ? prev - 1 : prev));
	}

	return (
		<S.Counter>
			<button onClick={decrement}>
				<Minus size={16} weight="fill" />
			</button>
			<span>{counter}</span>
			<button onClick={increment}>
				<Plus size={16} weight="fill" />
			</button>
		</S.Counter>
	);
}
