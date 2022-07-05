import { useSelector, useDispatch } from "react-redux";
import { flip } from "./lightSlice";

export default function App() {
  const isOn = useSelector((state) => state.room.isOn);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(flip());
  };
  return(
    <div className={isOn ? "room light" : "room dark"}>
           <button className="button" onClick={handleClick}>Flip</button>
    </div>
  )
}
