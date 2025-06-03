import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const response = await fetch(url);
      const receivedData = await response.json();

      setData(receivedData);
      setCache({ ...cache, [url]: receivedData });

      setIsLoading(false);
    }

    if (url in cache) {
      console.log("cache hit");
      setData(cache[url]);
      return;
    }

    fetchData();
  }, [url]);

  return { data, isLoading };
}
