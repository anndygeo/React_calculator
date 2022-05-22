import { ACCTIONS } from "./App"

export default function OperationButton({ dispatch, operation }) {
	return (
		<button
			onClick={() =>
				dispatch({ type: ACCTIONS.CHOISE_OPERATION, payload: { operation } })
			}
		>
			{operation}
		</button>)
}