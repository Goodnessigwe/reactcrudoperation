import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
//import { Message } from '@mui/icons-material';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crudreact"
})
app.get('/', (req, res)=>{
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result)=>{
        if(err) return res.json({Message:"Error inside server"});
        return res.json(result);
    })
});

app.post('/student', (req, res)=>{
    const sql = "INSERT INTO student(`name`,`email`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.email,
    ]
    db.query(sql, [values], (err, result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get('/read/:id', (req, res)=>{
    const sql = "SELECT * FROM student WHERE id= ?";
    const id = req.params.id;
    db.query(sql,[id], (err, result)=>{
        if(err) return res.json({Message:"Error inside server"});
        return res.json(result);
    })
});

app.put('/update/:id', (req, res)=>{
    const sql = "UPDATE student SET `name`=?, `email`=? WHERE id=?";
    const id = req.params.id;
    db.query(sql, [req.body.name,req.body.email, id], (err, result)=>{
        if(err) return res.json({Message:"Error inside server"});
        return res.json(result);
    })
})

app.delete('/delete/:id',(req, res)=>{
    const sql = "DELETE FROM student WHERE id=?";
    const id = req.params.id;
    db.query(sql, [id], (err, result)=>{
        if(err) return res.json({Message:"Error inside server"});
        return res.json(result);
    })
})


app.listen(8081,()=>{
    console.log("Listening");
})