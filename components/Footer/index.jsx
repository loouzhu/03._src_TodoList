import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  // 全选checkbox的回调
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  };
  // 删掉是所有已勾选的回调
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            // defaultChecked只会在页面首次渲染奏效，使用checkd+onChange
            checked={
              doneCount === total && doneCount !== 0 && total !== 0
                ? true
                : false
            }
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
