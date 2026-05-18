const express = require("express")

const app = express()
const puerto = 3000

app.use(express.text())

app.get("/", (req, res) => {
  res.send("Bienvenida comunidad. Este es el servidor Express de participación y comunicación de María Leal.")
})

app.get("/campania", (req, res) => {
  res.send("Campaña: comunicación clara, convivencia digital y participación ciudadana.")
})

app.get("/avisos", (req, res) => {
  res.send("Avisos comunitarios: verificar información, cuidar el lenguaje y evitar rumores.")
})

app.post("/propuestas", (req, res) => {
  const propuesta = req.body

  console.log("Propuesta recibida:")
  console.log(propuesta)

  res.send("Propuesta recibida por la plataforma comunitaria: " + propuesta)
})

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada. Revisa la dirección solicitada.")
})

app.listen(puerto, () => {
  console.log("Servidor Express funcionando en http://localhost:3000")
  console.log("Rutas disponibles:")
  console.log("GET  /")
  console.log("GET  /campania")
  console.log("GET  /avisos")
  console.log("POST /propuestas")
})
