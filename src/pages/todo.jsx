import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"
import { Button, Input } from "reactstrap"
import axios from "axios"
import TodoItem from "../component/TodoItem"


function TodoPage() {
    const [todoList, setTodoList] = useState([]);

    const renderTodoList = () => {
        return todoList.map((val) => {
          return (
            <TodoItem
              date={val.date}
              action={val.action}
              status={val.status}
            //   deleteItem={() => deleteTodoItem(val.id)}
            //   toggleStatus={() => toggleTodoStatus(val.id)}
            />
          );
        });
      };


    return (
    
    <div className="container">
            <div className="row my-3">
              <div className="offset-3 col-5">
                <Input name="todoInput" />
                <Input name="dateInput" type="date" />
              </div>
              <div className="col-2">
                <Button  color="success">
                  Add Todo
                </Button>
                <Button color="info">
                  Fetch Todo
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                {renderTodoList()}
              </div>
            </div>
          </div>
    )
}

export default TodoPage