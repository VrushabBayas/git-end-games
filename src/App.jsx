import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/Layout";

import "./App.css";
import GitIntroPage from "./components/markdown/GitIntro";

function App() {
return (
<BrowserRouter>
  <Routes>
    <Route element={<AppLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/introduction-to-git" element={<GitIntroPage />} />
    </Route>
    <Route path="*" element={<NotFound />}></Route>
  </Routes>
</BrowserRouter>
);
}

export default App;
