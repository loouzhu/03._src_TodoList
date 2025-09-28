import React, { Component } from "react";
import Header from "./components/Header/index";
import List from "./components/List/index";
import Footer from "./components/Footer/index";
import "./App.css";

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: "001", name: "吃饭", isDone: true },
      { id: "002", name: "睡觉", isDone: true },
      { id: "003", name: "写代码", isDone: false },
      { id: "004", name: "逛街", isDone: false },
    ],
  };

  // 用于添加一个todo，接受的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const { todos } = this.state;
    // 追加一个todo
    const newTodos = [todoObj, ...todos];
    // 更新状态
    this.setState({ todos: newTodos });
  };

  // 用于更新一个todo对象
  updateTodo = (id, isDone) => {
    // 获取状态中的todos
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, isDone };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };

  // 删除一个todo对象
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  checkAllTodo = (isDone) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, isDone };
    });
    this.setState({ todos: newTodos });
  };

  // 用于清除所有已经完成的任务
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return !todo.isDone;
    });
    this.setState(newTodos);
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todos={todos}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
            />
            <Footer
              todos={todos}
              checkAllTodo={this.checkAllTodo}
              clearAllDone={this.clearAllDone}
            />
          </div>
        </div>
      </div>
    );
  }
}
