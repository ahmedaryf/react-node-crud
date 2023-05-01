import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "my_website"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student ORDER BY id";
    db.query(sql, (err, result) => {
        if(err) return res.json({message: "Server Error"});
        return res.json(result);
    })
})

app.post("/student", (req, res) => {
    const sql = "INSERT INTO student(name, email) VALUES(?)";
    const value = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [value], (err, result) => {
        if(err) return res.json({Message: "Error inserting"});
        return res.json(result);
    })
})

app.get("/read/:id", (req, res) => {
    const sql = "SELECT * FROM student WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({message: "Server Error"});
        return res.json(result);
    })
})

app.put("/update/:id", (req, res) => {
    const sql = "UPDATE student SET name = ?, email = ? WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.email, id], (err, result) => {
        if(err) return res.json({message: "There was an Error"});
        return res.json(result);
    })
})

app.delete("/delete/:id", (req, res) => {
    const sql = "DELETE FROM student WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
    if(err) return res.json({message: "There was an Error"});
    return res.json(result);
    })
})

app.listen(8070, () => {
    console.log("Sever Listenin");
})
