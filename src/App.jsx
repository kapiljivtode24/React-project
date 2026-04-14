import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Profile from "./component/Profile";
import Setting from "./component/Setting";
import Reports from "./component/Reports";
import Analytics from "./component/Analytics";
import Help from "./component/Help";


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
       
        <Route path="/" element={<Home/>} />
         
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Setting />} />
          <Route path="reports" element={<Reports />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="help" element={<Help />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
