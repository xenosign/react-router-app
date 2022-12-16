import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Board from "./components/Board";
import BoardDetail from "./components/BoardDetail";
import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Start from "./pages/Start";
import Test from "./components/Test";
import TodoList from "./components/TodoList";
import GlobalStyle from "./components/GlobalStyle";
import { useSelector } from "react-redux";
import Mbti from "./pages/Mbti";
import Show from "./pages/Show";

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);

  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}

export default App;
