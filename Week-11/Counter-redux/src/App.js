import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "./counter/slice";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>You walked {count} steps</h1>
      <button className="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="button" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}
