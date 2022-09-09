import {atom} from 'solid-use';
import './Counter.css';

export default function Counter({ children }) {
	const count = atom(0);
	const add = () => count(count() + 1);
	const subtract = () => count(count() - 1);

	return (
		<>
			<div class="counter">
				<button onClick={subtract}>-</button>
				<pre>{count()}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class="counter-message">{children}</div>
		</>
	);
}
