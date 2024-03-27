import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const useDataFetch = (url,dependencies) => {
    const [Data, setData] = useState(null);
    const [errors, setErrors] = useState({ loading: false, error: false, message: '' });
    useEffect(() => {
        const fetchData = async () => {
            try {
                setErrors({ loading: true, error: false });
                const response = await axios.get(url).then((response) => {
                    const { data, statusCode,message } = response;
                    if (statusCode === 200) {
                        setData(data);
                    }else{
                        setErrors({
                            loading: false,
                            error: true,
                            message: message,
                        });
                    }
                });
            
            } catch (error) {
                console.error(error);
                setErrors({
                    loading: false,
                    error: true,
                    message: error.data ? error.data.message : 'An error occurred',
                });
                setData(null);
            }
        };

        fetchData();
        // You might want to add dependencies to the useEffect if needed
    }, [...dependencies]);

    return { Data, errors };
};
const usePostData = () => {
    const [Data, setData] = useState(null);
    const [errors, setErrors] = useState({ loading: false, error: false, message: '' });
        const handleSubmit = async (e,url, data) => {
          
            try {
                setErrors({ loading: true, error: false });
                  await axios.post(url, data).then((response) => {
                    const { data, statusCode ,message} = response;
                    if (statusCode === 200) {
                        setData(data);
                        toast.success(message)
                     
                    }else{
                        setErrors({
                            loading: false,
                            error: true,
                            message: message,
                        });
                        toast.error(message)
                        
                    }
                    
                });
            
            } catch (error) {
                console.error(error);
                setErrors({
                    loading: false,
                    error: true,
                    message: error.data ? error.data.message : 'An error occurred',
                });
                setData(null);
               toast.error(error.data ? error.data.message : 'An error occurred')
            }
        
        
        };
        // You might want to add dependencies to the useEffect if needed


    return { Data, errors,handleSubmit };
};
const usePutData = () => {
    const [Data, setData] = useState(null);
    const [errors, setErrors] = useState({ loading: false, error: false, message: '' });
        const handleSubmit = async (e,url, data) => {
            try {
                setErrors({ loading: true, error: false });
                const response = await axios.put(url, data).then((response) => {
                    const { data, statusCode } = response;
                    if (statusCode === 200) {
                        setData(data);
                    }
                });
            
            } catch (error) {
                console.error(error);
                setErrors({
                    loading: false,
                    error: true,
                    message: error.data ? error.data.message : 'An error occurred',
                });
                setData(null);
            }
        };
        return { Data, errors,handleSubmit };
    }
const useDeleteData = () => {
    const [Data, setData] = useState(null);
    const [errors, setErrors] = useState({ loading: false, error: false, message: '' });
        const handleSubmit = async (url) => {
            try {
                setErrors({ loading: true, error: false });
                const response = await axios.delete(url).then((response) => {
                    const { data, statusCode } = response;
                    if (statusCode === 200) {
                        setData(data);
                    }
                });
            
            } catch (error) {
                console.error(error);
                setErrors({
                    loading: false,
                    error: true,
                    message: error.data ? error.data.message : 'An error occurred',
                });
                setData(null);
            }
        };
        return { Data, errors,handleSubmit };
    }
export  {useDataFetch,usePostData,usePutData,useDeleteData};
