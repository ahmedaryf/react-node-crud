import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {
    const [data, setDate] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8070/")
        .then((res) => { setDate(res.data)})
        .catch((err) => {console.log(err)})
    }, []);

    const handleDelete = (id) => {
        axios.delete("http://localhost:8070/delete/" + id)
        .then(res => {
            
            window.location.reload();
        })
        .catch(err => console.log(err))

    }
  return (
    <div className='row mt-5'>
    <div className='d-flex justify-content-center'>
        <Link className='btn btn-success' to={"/create"} >Create +</Link>
    </div>
        {data.map((result, index) => {
            return (
                <div className='col' key={index}>
       
                    <div className='card mb-3 text-center mt-5' style={{width: "15rem", height: "15rem"}}>
                    <div className='card-body'>
                        <div className='card-title'>
                            <h3 className='text-primary'>{result.id}</h3>
                            <h3 className='text-primary'>{result.name}</h3>
                        </div>
                        <div className='card-text'>
                            <h5>{result.email}</h5>
                        </div>
                        <button onClick={() => {
                            if (window.confirm('Are you sure you want to delete this item?')) {
                                handleDelete(result.id);
                            }
                            }} className='btn btn-outline-danger btn-sm mt-5 me-2' >Delete</button>

                        <Link to={`/read/${result.id}`} className='btn btn-outline-success btn-sm mt-5 me-2' >Read</Link>
                        <Link to={`/edit/${result.id}`} className='btn btn-outline-warning btn-sm mt-5 me-4' >Edit</Link>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Home