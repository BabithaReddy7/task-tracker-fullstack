import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await API.get("/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error.response?.data || error.message);
        if (error.response?.status === 401) {
          navigate("/login"); // Redirect if not authenticated
        }
      }
    };
    fetchTasks();
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title} - {task.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
