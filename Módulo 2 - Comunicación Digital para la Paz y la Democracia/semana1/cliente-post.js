const http = require("http")

const datos = "Propuesta de María Leal: Fomentar talleres de convivencia digital y verificación de noticias en nuestra comunidad."

const opciones = {
  hostname: "localhost",
  port: 3000,
  path: "/api/propuestas",
  method: "POST",
  headers: {
    "Content-Type": "text/plain; charset=utf-8",
    "Content-Length": Buffer.byteLength(datos)
  }
}

const solicitud = http.request(opciones, (respuesta) => {
  let cuerpoRespuesta = ""

  respuesta.on("data", (parte) => {
    cuerpoRespuesta = cuerpoRespuesta + parte
  })

  respuesta.on("end", () => {
    console.log("Respuesta del servidor:")
    console.log(cuerpoRespuesta)
  })
})

solicitud.on("error", (error) => {
  console.log("No se pudo enviar la propuesta.")
  console.log("Verifica que el servidor esté funcionando con npm start.")
  console.log("Detalle:", error.message)
})

solicitud.write(datos)
solicitud.end()
