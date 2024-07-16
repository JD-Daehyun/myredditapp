import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import Header from "./components/header";
import RedditDetailPage from "./pages/reddit-detail";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<RedditDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
