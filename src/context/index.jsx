import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  //search parameter
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [reddits, setReddits] = useState([]);
  const [subReddits, setSubReddits] = useState([]);
  const [subredditName, setSubRedditName] = useState("home");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    // console.log(search);
    try {
      const response = await fetch(
        `https://www.reddit.com/search.json?q=${search}`
      );
      const result = await response.json();
      // console.log(result);
      setSearch("");
      setLoading(false);

      const redditData = result?.data?.children;
      // console.log(redditData);
      setReddits(redditData);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  async function fetchSubReddits() {
    setLoading(true);

    try {
      const response = await fetch(`https://www.reddit.com/subreddits.json`);
      const result = await response.json();
      console.log("SubReddit", result);
      const subRedditData = result?.data?.children;
      console.log(subRedditData);
      setSubReddits(subRedditData);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  async function fetchInitialData() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${subredditName.toLowerCase()}/.json`
      );
      const data = await response.json();
      const initialData = data?.data?.children;
      console.log(initialData);
      setReddits(initialData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        subReddits,
        reddits,
        search,
        setSubReddits,
        setReddits,
        setSearch,
        handleSubmit,
        fetchSubReddits,
        fetchInitialData,
        windowWidth,
        setWindowWidth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
