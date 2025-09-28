import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };
  // 鼠标移入移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  // 处理完成情况的回调
  /* 
  使用高阶函数的形式防止立即调用，或者
  onChange={this.handleCheck(id)}改为onChange={(e)=>handleCheck(id,e.target.checked)}
  但是handleCheck函数需要改：
  handleCheck = (id,checked) => {
    this.props.updateTodo(id, checked);
  };
  */
  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked);
    };
  };

  // 处理删除todo的回调
  deleteTodo = (id) => {
    return () => {
      if (window.confirm("确定删除吗？")) {
        this.props.deleteTodo(id);
      }
    };
  };

  render() {
    const { id, name, isDone } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "white" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          {/* defaultChecked允许之后修改  */}
          <input
            type="checkbox"
            checked={isDone}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={this.deleteTodo(id)}
          className="btn btn-danger"
          style={{ display: this.state.mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
