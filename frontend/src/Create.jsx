
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Create() {
    const [value, setValue] = useState({
        name: '',
        email: ''
    });

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8070/student", value)
        .then((res) => {
            console.log(res)
            navigate('/');
        })
        .catch((err) => console.log(err))
        setValue({
            name:'',
            email: ''
        })
    }

  return (
    <div className='container mt-5'>
        <h1 className='text-center mb-3'>Create Form</h1>
        <div className=' d-flex justify-content-center'>

        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='me-3'>Name:</label>
                <input value={value.name} onChange={(e) => setValue({...value, name: e.target.value})} className='form-control' type='text' placeholder='Enter Name here' />
            </div>
            <div className='mb-3'>
                <label className='me-3'>Email:</label>
                <input value={value.email} onChange={(e) => setValue({...value, email: e.target.value})} className='form-control' type='text' placeholder='Enter Email here' />
            </div>
            <button className='btn btn-outline-success'>Submit</button>
        </form>
        
        </div>
        <h4>{value.name}</h4>
        <h4>{value.email}</h4>
    </div>
  )
}

export default Create