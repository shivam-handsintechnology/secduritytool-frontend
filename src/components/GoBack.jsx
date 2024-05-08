import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
const GoBack = () => {
  const {  messages } = useSelector((state) => state.websocketReducer);
    const navigate=useNavigate()
  return (
    <>
      <Button onClick={() =>{ 
  
        navigate(-1)
        }} style={{ backgroundColor:'#184370'}} className='m-2'>Go Back</Button>
    </>
  )
}

export default GoBack