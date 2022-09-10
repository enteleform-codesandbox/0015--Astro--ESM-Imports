import {atom} from "solid-use"

export function setupCounter(element: HTMLButtonElement) {
  const count = atom(-1)
  const increment = () => {
		count(count() + 1)
    element.innerHTML = `count is ${count()}`
  }
	increment()
  element.addEventListener('click', increment)
}
