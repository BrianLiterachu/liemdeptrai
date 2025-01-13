import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export const useFetch = (url, single) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const json = await (await fetch(url + apiKey)).json();
        const { results, genres } = await json;

        if (single) setData([json]);
        else {
          if (results) setData([...results]);
          else if (genres) setData([...genres]);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};
