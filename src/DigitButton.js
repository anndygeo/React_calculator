import { ACCTIONS } from "./App"

export default function DigitButton({dispatch, digit}) {
	return <button onClick={() => dispatch({type: ACCTIONS.ADD_DIGIT, payload: {digit}})}>{digit}</button>
}