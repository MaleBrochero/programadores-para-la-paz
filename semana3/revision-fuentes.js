const fuentes = [
    "Página institucional",
    "Líder comunitario",
    "Mensaje reenviado",
    "Documento oficial",
    "Periódico local"
  ]
  
  console.log("Revisión de fuentes con for tradicional:")
  
  for (let i = 0; i < fuentes.length; i = i + 1) {
    console.log("Fuente", i + 1, ":", fuentes[i])
  }
  
  console.log("Revisión de fuentes con for...of:")
  
  for (const fuente of fuentes) {
    console.log("Fuente:", fuente)
  }
  
  console.log("Revisión de fuentes finalizada.")
  