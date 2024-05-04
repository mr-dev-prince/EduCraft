import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import Courses from "./components/pages/Courses";
import Blogs from "./components/pages/Blogs";
import CourseDetail from "./components/pages/CourseDetail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Phone from "./components/auth/Phone";
import Profile from "./components/pages/Profile";
import EditProfile from "./components/pages/EditProfile";
import { useSetRecoilState } from "recoil";
import { UserState } from "./state/atoms/UserState";
import { useEffect } from "react";
import { fetchUserData } from "./state/getUser.js";

function App() {
  const setUser = useSetRecoilState(UserState);

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const userData = await fetchUserData();
        setUser(userData);
      };
      fetchUser();
    } catch (error) {
      console.log("Error while fetching user", error);
    }
  }, [setUser]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/:id" element={<CourseDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
