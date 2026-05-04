let semanaActual = 1
const semanasDeSeguimiento = 4
let propuestasAtendidas = 0

console.log("Seguimiento comunitario de propuestas")

while (semanaActual <= semanasDeSeguimiento) {
  console.log("Semana", semanaActual, ": Realizando seguimiento...")
  // Supongamos que se atienden 2 propuestas por semana
  propuestasAtendidas = propuestasAtendidas + 2
  console.log("Propuestas atendidas acumuladas:", propuestasAtendidas)
  semanaActual = semanaActual + 1
}

console.log("Seguimiento de las", semanasDeSeguimiento, "semanas finalizado.")
console.log("Total de propuestas atendidas:", propuestasAtendidas)
