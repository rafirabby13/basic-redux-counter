import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decreament, increament } from "./redux/features/counter/CounterSlice";
import { RootState, store } from "./redux/store";
import { Button } from "./components/ui/button";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  const handleIncreament = (amount: number) => {
    dispatch(increament(amount));
  };
  const handleDecreament = () => {
    dispatch(decreament());
  };

  return (
    <div>
      <p className="text-3xl">Counter with redux</p>
      <div className="flex items-center gap-4 justify-center py-10">
        <Button onClick={() => handleIncreament(5)} >
          Increament By 5
        </Button>
        <Button onClick={()=>handleIncreament(1)} >
          Increament
        </Button>
        <p className="border-2 p-2 mx-5 px-5 font-bold">{count}</p>
        <Button onClick={handleDecreament} >
          {" "}
          Decreament
        </Button>
      </div>
    </div>
  );
}

export default App;
