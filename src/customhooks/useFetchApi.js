import { useState, useEffect,useCallback } from "react";
const useFetchApi = (FetcFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = useCallback(async () => {
    try {
      setError(false);
      const res = await FetcFunction();
      setData(res.data);
     if(res.statusCode===500){
      setError(true);
     }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }, [FetcFunction, setError]);

  useEffect(() => {
    if (loading) {
      getData();
    }
  }, [loading, getData]);

  return [data, loading, error];
};

export default useFetchApi;
