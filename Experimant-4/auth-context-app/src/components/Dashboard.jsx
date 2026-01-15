import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { userName, loginCount, logout } = useContext(AuthContext);

  return (
    <div className="auth-container">
      <div className="dashboard-content">
        <div className="welcome-text">Welcome,</div>
        <div className="user-name">{userName}!</div>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          You are successfully logged in
        </p>
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '12px',
          marginBottom: '2rem',
          fontSize: '1.1rem',
          fontWeight: '600'
        }}>
          Login Count: {loginCount}
        </div>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
