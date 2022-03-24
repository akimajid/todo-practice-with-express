import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import axios from "axios";
import TodoItem from "../component/TodoItem";
import { axiosInstance } from "../configs/api";

const todoData = {
  id: 1,
  date: "2022-03-22",
  action: "Fundamental",
  status: "Done",
};

function TodoPage() {
  const [todo, setTodo] = useState([]);

  const fetchTodo = async () => {
    try {
      const res = await axiosInstance.get("/todos");

      setTodo(res.data.result);
    } catch (err) {
      console.log(err?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="container">
      <div className="row my-3">
        <div className="offset-3 col-5">
          <Input name="todoInput" />
          <Input name="dateInput" type="date" />
        </div>
        <div className="col-2">
          <Button color="success">Add Todo</Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
          {todo.map((todoData) => {
              return <TodoItem {...todoData}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
