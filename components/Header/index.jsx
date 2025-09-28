import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
  // 对接受的props进行类型，必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  handlekeyUp = (e) => {
    // 解构赋值获取keyCode, target
    const { key, target } = e;
    // 判断是否为回车按键
    if (key !== 13) return;
    if (!target.value) {
      alert("输入不能为空");
      return;
    }
    // 准备好一个todo对象
    const todoObj = { id: nanoid(), name: target.value, isDone: false };
    this.props.addTodo(todoObj);
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handlekeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
