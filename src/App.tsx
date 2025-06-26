import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decreament, increament } from "./redux/features/counter/CounterSlice";
import { RootState, store } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counterr);

  const handleIncreament = (amount: number) => {
    dispatch(increament(amount));
  };
  const handleDecreament = () => {
    dispatch(decreament());
  };

  return (
    <>
      <p className="text-3xl">Counter with redux</p>
      <div className="flex items-center gap-4 justify-center py-10">
        <button onClick={() => handleIncreament(5)} className="btn btn-primary">
          Increament By 5
        </button>
        <button onClick={()=>handleIncreament(1)} className="btn btn-primary">
          Increament
        </button>
        <p className="border-2 p-2 mx-5 px-5 font-bold">{count}</p>
        <button onClick={handleDecreament} className="btn">
          {" "}
          Decreament
        </button>
      </div>
    </>
  );
}

export default App;
