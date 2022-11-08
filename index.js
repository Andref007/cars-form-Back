const express = require("express")
const app = express()
// const mysql = require("mysql") 
const mysql = require('mysql2')
const cors = require('cors')


const db = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"andre1986",
  database:"carros"
})


app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//   let sql = 
  

//   db.query(sql, (err, result) => {
//     console.log(err)
//   }) 
  
// })


app.post('/register', (req, res) => {
  const { marca } = req.body
  const { modelo } = req.body
  const { cor } = req.body
  const { ano_fab } = req.body
  const { ano_mod } = req.body
  const { tipo_camb } = req.body

let SQL = "INSERT INTO cars_info (marca, modelo, cor, ano_fab, ano_mod, tipo_camb ) VALUES ( ?, ?, ?, ?, ?, ? )";
  // console.log(marca)

  db.query(SQL, [marca, modelo, cor, ano_fab, ano_mod, tipo_camb],(err, result) => {
    console.log(err)
  })
})


app.get("/getCards", (req, res) =>  {
  
  let SQL = "SELECT * from carros";

  db.query(SQL, (err, result) =>{
    if(err) console.log(err)
    else res.send(result)
  })
})

app.listen(3001, () => {
  console.log('Rodando servidor!');
})