import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Read() {
    const {id} = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8070/read/"+id)
        .then(res => {
            setStudent(res.data);
        })
        .catch(err => console.log(err))
    }, []);
    
    return (
        <div className='container'>
          <h2 className='mt-5 text-center'>Student Details</h2>
          <div className='card'>
            <div className='card-body'>
                {student ? (
                    <div>
                    <h3>{student[0].name}</h3>
                    <p>{student[0].email}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}

                {/* <Link to={`/edit/${student.id}`} className='btn btn-outline-warning btn-sm mt-5 me-4' >Edit</Link> */}
                <Link to={"/"} className='btn btn-outline-primary btn-sm mt-5' >Back</Link>
            </div>
            
          </div>
        </div>
      );
}

export default Read;