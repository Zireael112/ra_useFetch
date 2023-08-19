import { useEffect, useState } from 'react'

const useJsonFetch = ({url, opts}) => {
  const [data, setDatas] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const jsonFetch = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}${opts}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setDatas(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false)
      }
    }
    jsonFetch(url, opts);

    return () => setDatas(null);
  }, [url, opts]);

  return { data, error, loading };
}

export default useJsonFetch