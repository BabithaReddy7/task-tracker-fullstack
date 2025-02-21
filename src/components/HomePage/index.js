import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="container mt-5 text-center">
        <h1>Welcome to Task Tracker</h1>
        <p>Manage your tasks efficiently!</p>
        <Link to="/login">
          <button className="btn btn-primary m-2">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-success m-2">Create Account</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
