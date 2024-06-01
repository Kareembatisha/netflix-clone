import { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import Login from "./pages/LogIn/Login";
import Profile from "./pages/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "../firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            
            <Route index element={<HomeScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
