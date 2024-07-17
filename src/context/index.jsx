import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  //search parameter
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [reddits, setReddits] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    // console.log(search);
    try {

      const response = await fetch(
        `https://www.reddit.com/search.json?q=${search}`
      );
      const result = await response.json();
      console.log(result);
      setSearch("");
      setLoading(false);

      const redditData = result?.data?.children;
      console.log(redditData);
      setReddits(redditData);
    

    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <GlobalContext.Provider value={{ search, setSearch, handleSubmit }}>
      {children}
    </GlobalContext.Provider>
  );
}
