import axios from 'axios'
import React,{useState} from 'react'
import './switch.css'

const SwitchComponent = ({setChecked,checked,changeMiddlewarevalue}) => {
    console.log(changeMiddlewarevalue)
    const [ChangeValue, setChangeValue] = useState(checked)
    const updateSqlmiddleware =(value) => {
        console.log({value})
        axios.post('security/middlwares/switch',value).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.error(error)
        })
    }
  return (
          <div class="button r" id="button-1">
            <input type="checkbox" checked={checked} onClick={updateSqlmiddleware({changeMiddlewarevalue:ChangeValue})}  onChange={(e)=>{ setChangeValue(e.target.checked) 
                console.log(e.target.checked) }} class="checkbox" />
            <div class="knobs"></div>
            <div class="layer"></div>
          </div>
  )
}

export default SwitchComponent
