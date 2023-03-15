import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import './home.css';

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="flex-container">
            <div className="flex-items beauty">
                <h1>Home</h1>
                {currentUser ? (
                    <p>
                        You are logged - <Link to="/dashboard">View Dashboard</Link>
                    </p>
                ) : (
                    <p>
                        <Link  className="button button1" to="/login">Log In</Link> or <Link className="button button1"  to="/signup">Sign Up</Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Home;