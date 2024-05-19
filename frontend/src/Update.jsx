import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios";



function Update() {
  const {id} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{
    axios.get('http://localhost:8081/read/'+id)
    .then(res=>{
        setValues({...values,name:res.data[0].name,email:res.data[0].email})
    })
    .catch(err=>console.log(err))
},[])
const [values, setValues] = useState({
  name: "",
  email: ""
});
     
  const handleUpdate = (event)=>{
    event.preventDefault();
    axios.put('http://localhost:8081/update/' +id, values)
   .then(res=>{
     console.log(res);
     navigate('/');
   })
   .catch(err=>console.log(err))

  }
  return (
    <div className=" d-flex vh-100 bg-dark justify-content-center align-items-center" >
      <div className=" w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update Student</h2>
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
          
          <button className="btn btn-success">Update</button>
          <Link to="/" className ="btn btn-info m-2">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update