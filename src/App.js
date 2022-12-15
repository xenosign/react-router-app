import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import BoardDetail from "./components/BoardDetail";
import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Test from "./components/Test";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <ListContainer />
    </div>
  );
}

export default App;
