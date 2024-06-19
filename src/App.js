import { Routes, Route } from "react-router-dom";
import Outline from "./main/Outline/Outline";
import Board from "./main/Board/Board";
import Task from "./main/Task/Task";

const App = () => {
  return (
    <Outline>
      <Routes>
        <Route path="/tasks/:id" element={<Task />} />
        <Route exact path="/" element={<Board />} />
      </Routes>
    </Outline>
  );
};

export default App;
