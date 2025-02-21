import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  state = { tasks: [], title: "", description: "", due_date: "" };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    axios
      .get("https://tasktracker-q3ni.onrender.com/tasks", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => this.setState({ tasks: res.data }))
      .catch((err) => console.log(err));
  };

  handleAddTask = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://tasktracker-q3ni.onrender.com/tasks",
        {
          title: this.state.title,
          description: this.state.description,
          due_date: this.state.due_date,
        },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      )
      .then(() => this.fetchTasks());
  };

  handleDeleteTask = (id) => {
    axios
      .delete(`https://tasktracker-q3ni.onrender.com/tasks/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => this.fetchTasks());
  };

  render() {
    return (
      <div className="container mt-5">
        <h2>Task Tracker</h2>
        <form onSubmit={this.handleAddTask}>
          <input type="text" placeholder="Title" onChange={(e) => this.setState({ title: e.target.value })} required />
          <input type="text" placeholder="Description" onChange={(e) => this.setState({ description: e.target.value })} required />
          <input type="date" onChange={(e) => this.setState({ due_date: e.target.value })} required />
          <button type="submit">Add Task</button>
        </form>

        <h3>Task List</h3>
        <ul>
          {this.state.tasks.map((task) => (
            <li key={task.id}>
              {task.title} - {task.status}
              <button onClick={() => this.handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
