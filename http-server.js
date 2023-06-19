const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.static(__dirname + '/public'))

app.use("/create", (req, res) => {
  const { file, text } = req.query
  fs.writeFileSync(file, text)
  res.send(new Date())
})

app.use("/read", (req, res) => {
  const { file } = req.query
})

app.use("/update", (req, res) => {
  const { file, text } = req.query
})

app.use("/delete", (req, res) => {
  const { file } = req.query
})

app.listen(3000, () => console.log("Servidor rodando!"))