import { Routes, Route } from "react-router-dom";
import { Agents, Blog, Details, ErrorPage, Home, Listing } from "./Pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar, Footer } from "./Components";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/:id/details" element={<Details />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
