import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  //search parameter
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [reddits, setReddits] = useState([]); //display list of reddits
  const [subReddits, setSubReddits] = useState([]); //display list of subreddits
  const [subRedditUrl, setSubRedditUrl] = useState("/r/funny/"); //click on a particular subreddit to access the reddits
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); //dynamic sizing for subreddit list
  const [selectedReddit, setSelectedReddit] = useState({}); //identify selected reddit
  const [comments, setComments] = useState([]); //display comments for selected reddit
  const [subRedditData, setSubRedditData] = useState({}) //select subreddit
  const navigate = useNavigate();
  useEffect(() => {
    fetchInitialData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    navigate('/')
    setLoading(true);
    // console.log(search); ${subRedditUrl? subRedditUrl : '/'}
    try {
      console.log(subRedditUrl);
      const response = await fetch(
        `https://www.reddit.com${
          subRedditUrl ? subRedditUrl : "/"
        }search.json?q=${search}&restrict_sr=1`
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

  async function fetchHomePageData(subreddit) {
    setLoading(true);
    setSubRedditUrl(subreddit.url);
    setSubRedditData(subreddit);
    if (subreddit.url && subreddit.url.length > 1) {
      const url = subreddit.url.slice(0, -1);

      try {
        const response = await fetch(`https://www.reddit.com${url}.json`);
        const data = await response.json();
        const redditData = data?.data?.children || [];
        console.log(redditData);
        setReddits(redditData);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
  }

  async function fetchComments(id) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.reddit.com/${subRedditUrl}comments/${id}.json`
      );
      const data = await response.json();
      // console.log(data);
      // console.log(data[1]?.data?.children);
      const redditComments = data[1]?.data?.children;
      setComments(redditComments);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchInitialData() {
    setLoading(true);
    setSubRedditUrl("");
    try {
      const response = await fetch(`https://www.reddit.com/.json`);
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

  return (
    <GlobalContext.Provider
      value={{
        subReddits,
        subRedditData,
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
        fetchComments,
        fetchInitialData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
