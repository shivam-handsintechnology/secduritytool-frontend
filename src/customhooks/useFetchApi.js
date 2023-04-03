import { useState, useEffect,useCallback } from "react";

const useFetchApi = (FetcFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const getData = useCallback(async () => {
   await  FetcFunction().then((res) => {
      setData(res.data)
      setLoading(false);
       }
   ).catch((err)=>{
    setError(true)
   })
  }, [FetcFunction])
  useEffect(() => {
    if (loading) { // is true initially, and again when button is clicked
      getData().then(() => setLoading(false))
    }
  }, [loading, getData])

  return [data,loading,error];
};


export default useFetchApi;