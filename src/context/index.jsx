import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  //search parameter
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);


  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    console.log(search);
    setSearch('');
  }



  return (
    <GlobalContext.Provider value={{ search, setSearch, handleSubmit}}>
      {children}
    </GlobalContext.Provider>
  );
}
