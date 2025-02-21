import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Login extends Component {
  state = { email: "", password: "", redirect: false };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://tasktracker-q3ni.onrender.com/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        this.setState({ redirect: true });
      })
      .catch((err) => alert("Invalid credentials!"));
  };

  render() {
    if (this.state.redirect) return <Navigate to="/dashboard" />;
    return (
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
