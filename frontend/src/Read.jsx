import axios from "axios";
import { useEffect, useState } from "react"
import { useParams,Link } from "react-router-dom"

function Read() {
    const {id} = useParams();
    const [student, setStudent] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/read/' +id)
        .then(res=>{
            setStudent(res.data[0])
        })
        .catch(err=>console.log(err))
    },[id])
  return (
    <div className=" d-flex vh-100 bg-dark justify-content-center align-items-center" >
    <div className=" w-50 bg-white rounded p-3">
        <h2>Student Detail</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
               <tr >
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <Link to="/" className ="btn btn-info m-2">Back</Link>
                <Link to={`/edit/${student.id}`} className="btn btn-primary">Edit</Link>
              </td>
              </tr>
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default Read