const btnCampania = document.getElementById("btnCampania")
const btnAvisos = document.getElementById("btnAvisos")
const btnEnviar = document.getElementById("btnEnviar")

const respuestaConsulta = document.getElementById("respuestaConsulta")
const respuestaEnvio = document.getElementById("respuestaEnvio")
const propuesta = document.getElementById("propuesta")

btnCampania.addEventListener("click", async () => {
  const respuesta = await fetch("/api/campania")
  const texto = await respuesta.text()

  respuestaConsulta.textContent = texto
})

btnAvisos.addEventListener("click", async () => {
  const respuesta = await fetch("/api/avisos")
  const texto = await respuesta.text()

  respuestaConsulta.textContent = texto
})

btnEnviar.addEventListener("click", async () => {
  const textoPropuesta = propuesta.value

  const respuesta = await fetch("/api/propuestas", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    },
    body: textoPropuesta
  })

  const texto = await respuesta.text()

  respuestaEnvio.textContent = texto
})
