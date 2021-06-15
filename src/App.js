import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import Login from "./Components/Login";
import { useStateValue } from "./ContextApi/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app__">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Routes>
              <Route
                path="/rooms/:roomId"
                element={
                  <>
                    <Sidebar />
                    <Chat />
                  </>
                }
              />

              <Route
                path="/"
                element={
                  <>
                    <Sidebar />
                  </>
                }
              />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
