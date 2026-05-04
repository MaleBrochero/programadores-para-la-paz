const propuestas = [
    "Mejorar la comunicación del barrio",
    "Crear una campaña contra la desinformación",
    "Organizar una jornada de convivencia",
    "Publicar avisos comunitarios claros",
    "Crear un huerto comunitario"
  ]
  console.log("Listado de propuestas comunitarias con for tradicional:")

for (let i = 0; i < propuestas.length; i = i + 1) {
  console.log("Propuesta", i + 1, ":", propuestas[i])
}

console.log("Listado de propuestas comunitarias con for...of:")

for (const propuesta of propuestas) {
  console.log("Propuesta:", propuesta)
}
console.log("Todas las propuestas fueron listadas.")