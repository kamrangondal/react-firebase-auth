import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config.js";
import './home.css';

const Dashboard = () => {
    const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    navigate("/login");
  }
  return (
    <div className="flex-container">
	    <div className="flex-items beauty">
      <h1>Welcome</h1>
      <p>This is the dashboard, if you can see this you're logged in.</p>
      <button className="button button1" onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
      </div>
    </div>
  );
};

export default Dashboard;