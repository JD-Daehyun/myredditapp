import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  //search parameter
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);


  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    console.log(search);
    const response = await fetch(`https://www.reddit.com/search.json?q=${search}`);
    const data = await response.json();
    console.log(data);
    setSearch('');

  }



  return (
    <GlobalContext.Provider value={{ search, setSearch, handleSubmit}}>
      {children}
    </GlobalContext.Provider>
  );
}
