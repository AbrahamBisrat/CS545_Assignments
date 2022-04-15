import { useState, useEffect } from "react";
const axios = require("axios");

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // run this every render of the component
  useEffect(() => {
    const abortController = new AbortController();
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch the data for that resource.");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });

    // clean up effort, Abort Controller
    // if in the middle of the async, user moved to other page
    // abort started fetch via axios
    return () => abortController.abort();
  }, [url]);
  // dependency for the useEffect to trigger

  return null;
}
