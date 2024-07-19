import { createContext, useState, useEffect} from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  //search parameter
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [reddits, setReddits] = useState([]);
  const [subReddits, setSubReddits] = useState([]);
  const [subRedditUrl, setSubRedditUrl] = useState("/r/funny/");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedReddit, setSelectedReddit] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    fetchHomePageData();
  },[])

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    console.log(search);
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
      // console.log("SubReddit", result);
      const subRedditData = result?.data?.children;
      // console.log(subRedditData);
      setSubReddits(subRedditData);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  async function fetchHomePageData(url='/') {
    setLoading(true);
    setSubRedditUrl(url);
    if( url && url.length >1){
      url = url.slice(0,-1);
    }
    try {
      const response = await fetch(
        `https://www.reddit.com${url}.json`
      );
      const data = await response.json();
      const initialData = data?.data?.children || [];
      // console.log(initialData);
      setReddits(initialData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  async function fetchComments(id){
    setLoading(true);
    try{  
      const response = await fetch(`https://www.reddit.com${subRedditUrl}comments/${id}.json`);
      const data = await response.json();
      // console.log(data);
      console.log(data[1]?.data?.children);
      const redditComments = data[1]?.data?.children;
      setComments(redditComments);

    }catch(e){
      console.log(e);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        subReddits,
        reddits,
        search,
        subRedditUrl,
        comments,
        setSubRedditUrl,
        setSubReddits,
        setReddits,
        setSearch,
        handleSubmit,
        fetchSubReddits,
        fetchHomePageData,
        windowWidth,
        setWindowWidth,
        selectedReddit,
        setSelectedReddit,
        fetchComments
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
