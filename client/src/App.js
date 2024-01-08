import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/about/AboutPage";
import ProductsPage from "./pages/Products/ProductsPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
