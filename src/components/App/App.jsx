import { useEffect } from "react";
import MainPage from "../MainPage/MainPage";
import { useDispatch } from "react-redux";
import { getChats } from "../../redux/chats/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChats());
  }, [dispatch]);

  return <MainPage />;
}

export default App;
