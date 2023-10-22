/* import React, { useState } from "react"
import Form from 'react-bootstrap'
import DangerBar from "../DangerBar/DangerBar"

const DangerInput = () => {
    //var q guarda el valor elegido x el user
    const [value, setValue]= useState(0);
//actualiza estado de value
    const handleChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(Number(event.target.value));
    }

  return (
    <div className="m-3 w-50">
        <h2>Ejemplo 1</h2>
        <Form.Range value={value} onChange={handleChange}/>
        <DangerBar value={value}/>
    </div>
  )
}

export default DangerInput */