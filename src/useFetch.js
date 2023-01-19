import { useState, useEffect } from 'react';

//our very own custom hook that makes use of two more hooks and gets us an internet resouce with proper return variabels

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

   
      fetch(url, { signal: abortCont.signal }) //if an unmounted dom object is called 
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data from server');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      });

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;