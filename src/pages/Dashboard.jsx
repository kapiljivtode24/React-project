import { Outlet, useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
 <h2>dashboard</h2>

      <button onClick={() => navigate("profile")}>Profile</button>
      <button onClick={() => navigate("settings")}>Settings</button>
      <button onClick={() => navigate("reports")}>Reports</button>
      <button onClick={() => navigate("analytics")}>Analytics</button>
      <button onClick={() => navigate("help")}>Help</button>

  

  
      <Outlet />
    </div>
  );
}

export default Dashboard;