import "./css/app.scss";
import Home from "./components/routes/Home";
import Navigation from "./components/routes/Navigation";
import Shop from "./components/routes/Shop";
import SignIn from "./components/routes/SignIn";
import { Routes, Route, Outlet } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

// 008 category item components
