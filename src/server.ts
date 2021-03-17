import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import roles from "../src/routes/role"

const app = express()
const port = process.env.PORT || 3333

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(roles)

app.listen(port, () => console.log(`Ok, Servidor Rodando em ${port}`))