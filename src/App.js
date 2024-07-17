import { Route, Routes } from "react-router-dom";
// import "./App.css";
import HomePage from "./pages/home";
import Header from "./components/header";
import RedditDetailPage from "./pages/reddit-detail";
import SubReddits from "./components/subreddit";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
      <SubReddits />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<RedditDetailPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
