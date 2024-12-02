import { useEffect } from "react";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { getChats } from "../../redux/chats/operations";
import { Routes, Route } from "react-router-dom";
import ChatList from "../ChatList/ChatList";
import ChatWindow from "../ChatWindow/ChatWindow";
import ChatSearch from "../ChatSearch/ChatSearch";
import { MainPageContainer } from "./App.styled";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChats());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainPageContainer>
        <ChatSearch />
        <Routes>
          <Route path="/" element={<ChatList />}>
            <Route path="chat/:id" element={<ChatWindow />} />
          </Route>
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </MainPageContainer>
    </Suspense>
  );
}

export default App;
