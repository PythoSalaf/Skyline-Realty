import { Routes, Route } from "react-router-dom";
import { ErrorPage, Home } from "./Pages";
import { Navbar } from "./Components";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
