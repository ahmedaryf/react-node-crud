import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8070/read/"+id)
        .then(res => {
            setValues({...values, name: res.data[0].name, email: res.data[0].email})
        })
        .catch(err => console.log(err))
    }, []);
    
    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8070/update/"+id, values)
        .then(res => {
            console.log(res)
            navigate("/");
        })
        .catch(err => console.log(err))
        
    }
  return (
    <div className='container mt-5'>
        <form onSubmit={handleUpdate}>
            <div className='mb-3'>
                <label className='me-3'>Name:</label>
                <input onChange={(e) => setValues({...values, name: e.target.value})} value={values.name} className='form-control' type='text' placeholder='Enter Name here' />
            </div>
            <div className='mb-3'>
                <label className='me-3'>Email:</label>
                <input onChange={(e) => setValues({...values, email: e.target.value})} value={values.email} className='form-control' type='text' placeholder='Enter Email here' />
            </div>
            <button className='btn btn-outline-success'>Update</button>
            
        </form>
        <Link to={"/"} className='btn btn-outline-primary btn-sm mt-5' >Back</Link>
    </div>
  )
}

export default Edit;