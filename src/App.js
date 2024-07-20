import { Route, Routes } from "react-router-dom";
// import "./App.css";
import HomePage from "./pages/home";
import Header from "./components/header";
import RedditDetailPage from "./pages/reddit-detail";
import SubReddits from "./components/subreddit";
import LikedPage from "./pages/Liked";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row py-5 w-[95vw] mx-auto">
      <SubReddits />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<RedditDetailPage />} />
        <Route path="/liked" element={<LikedPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
