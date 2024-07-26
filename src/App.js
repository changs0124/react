import { Route, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { reset } from "./styles/global";
import PostPage from "./pages/basic/PostPage";
import GetPage from "./pages/basic/GetPage";
import PutPage from "./pages/basic/PutPage";
import DeletePage from "./pages/basic/DeletePage";
import MainLayout from "./components/MainLayout/MainLayout";
import SideBar from "./components/SideBar/SideBar";
import MainContainer from "./components/MainContainer/MainContainer";
import PostPage2 from "./pages/basic/PostPage2";
import PromisePage from "./pages/basic/PromisePage";
import RegisterSizePage from "./pages/basic/RegisterSizePage";
import RegisterColorPage from "./pages/basic/RegisterColorPage";
import ComputerPage from "./pages/basic/ComputerPage";
import AllToDoList from "./components/AllToDoList/AllToDoList";
import ToDoListPage from "./pages/basic/ToDoListPage";

function App() {
  return (
    <>
      <Global styles={reset}/>
      <MainLayout>
        {/* <SideBar /> */}
        <MainContainer>
          <Routes>
            <Route path="/async/basic/post" element={<PostPage />} />
            <Route path="/async/basic/post2" element={<PostPage2 />} />
            <Route path="/async/basic/get" element={<GetPage />} />
            <Route path="/async/basic/put" element={<PutPage />} />
            <Route path="/async/basic/delete" element={<DeletePage />} />
            <Route path="/async/basic/promise" element={<PromisePage />} />
            <Route path="/async/basic/size/register" element={<RegisterSizePage />} />
            <Route path="/async/basic/color/register" element={<RegisterColorPage />} />
            <Route path="/computer" element={<ComputerPage />} />
            <Route path="/todolist" element={<ToDoListPage />} />
          </Routes>
        </MainContainer>
      </MainLayout>
    </>
  );
}

export default App;
