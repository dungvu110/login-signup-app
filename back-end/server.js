import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bycrypt from 'bcrypt';

const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db",
});

const salt = 5;
app.post("/register", (req, res) => {
    // console.log(">>> CHECK DATA:", req.body.username, "---", req.body.email, "---", req.body.password)
    const sql = "INSERT INTO user (`username`, `email`, `password`) VALUES (?)"
    bycrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json("Error")
        const values = [req.body.username, req.body.email, hash]
        db.query(sql, [values], (err, result) => {
            if (err) console.log(err)
            else return res.json(result)
        })
    })
})

app.post("/login", (req, res) => {
    // console.log(">>> CHECK DATA:", req.body.username, "---", req.body.email, "---", req.body.password)
    const sql = "SELECT * FROM user WHERE `email` = ?"
    db.query(sql, [req.body.email], (err, result) => {
        if (err) return res.json({ Error: "Error" })
        else {
            if (result.length > 0) {
                bycrypt.compare(req.body.password.toString(), result[0].password, (err, resopnse) => {
                    if (err) return res.json({ Error: "Error" })
                    if (resopnse) return res.json({ Status: "Success" })
                    else return res.json({ Error: "Wrong password!" })
                })
            }
            else {
                return res.json({ Error: "Emael doesn't exist!" })
            }
        }
    })






    bycrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json("Error")
        const values = [req.body.username, req.body.email, hash]
        db.query(sql, [values], (err, result) => {
            if (err) console.log(err)
            else return res.json(result)
        })
    })
})

app.listen(8081, () => {
    console.log("listening");
});