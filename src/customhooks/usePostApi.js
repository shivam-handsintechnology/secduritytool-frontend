import { useState } from 'react';
const usePostRequest = (FetcFunction) => {
  const [Postdata, setData] = useState(null);
  const [Posterror, setError] = useState(null);
  const [PostisLoading, setIsLoading] = useState(false);
  const execute = async (body) => {
    setIsLoading(true);
    try {
      const response = await FetcFunction(body);
      console.log(response)
      setData(response);
      setError(null);
    } catch (error) {
      console.log(error)
      setError(error);
      setData(null);
    }
    setIsLoading(false);
  };
  return { execute, Postdata, Posterror, PostisLoading };
};
export default usePostRequest;
/*example useage
   const { execute, data, error, isLoading }= usePostRequest(createPost); 
    const handleClick = () => {
    execute({ key: 'value' });
  };

*/

