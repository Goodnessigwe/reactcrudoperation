//import React from 'react'
import axios from 'axios';
import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({
    name: "",
    email: ""
  })

  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8081/student', values)
    .then(res=>{
      console.log(res);
      navigate('/')
    })
    .catch(err=> console.log(err))
  }
  return (
    <div className=" d-flex vh-100 bg-dark justify-content-center align-items-center" >
      <div className=" w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className="mb-2 ">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" onChange={e=>setValues({...values, name:e.target.value})} 
            className="form-control" value={values.name} />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" onChange={e=>setValues({...values, email:e.target.value})}
            className="form-control" value={values.email}/>
          </div>
          <Link to="/" className ="btn btn-info m-2">Back</Link>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create