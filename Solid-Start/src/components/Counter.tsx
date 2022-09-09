import {atom} from "solid-use";
import "./Counter.css";

export default function Counter() {
  const count = atom(0);
  return (
    <button class="increment" onClick={() => count(count() + 1)}>
      Clicks: {count}
    </button>
  );
}
