import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Login, Profile, Register } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
