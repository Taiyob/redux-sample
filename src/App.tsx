import "./App.css";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <button
        onClick={() => dispatch(incrementByValue(5))}
        type="submit"
        className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white mr-4"
      >
        increment by 5
      </button>
      <div className="flex  border border-purple-300 rounded-md bg-slate-50 p-10">
        <button
          onClick={() => dispatch(increment())}
          type="submit"
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          type="submit"
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
