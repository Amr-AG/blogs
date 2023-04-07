import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data from server.");
        }
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setData(data);
          setPending(false);
        }, 1000);
      })
      .catch((err) => {
        setPending(false);
        setError(err.message);
      });
  }, [url]);
  return { data, pending, error };
};

export default useFetch;
