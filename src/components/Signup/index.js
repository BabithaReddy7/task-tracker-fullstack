import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Signup extends Component {
  state = { name: "", email: "", password: "", redirect: false };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://tasktracker-q3ni.onrender.com/signup", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then(() => this.setState({ redirect: true }))
      .catch(() => alert("Signup failed!"));
  };

  render() {
    if (this.state.redirect) return <Navigate to="/login" />;
    return (
      <div className="container mt-5">
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={this.handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} required />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;
