const actividades = [
    "Revisar propuestas recibidas",
    "Confirmar fuentes de información",
    "Publicar mensajes claros",
    "Hacer seguimiento a compromisos",
    "Evaluar resultados del mes"
  ]
  
  console.log("Resumen de actividades comunitarias con for tradicional:")
  
  for (let i = 0; i < actividades.length; i = i + 1) {
    console.log("Actividad pendiente", i + 1, ":", actividades[i])
  }
  
  console.log("Resumen de actividades comunitarias con for...of:")
  
  for (const actividad of actividades) {
    console.log("Actividad pendiente:", actividad)
  }
  
  console.log("Resumen comunitario finalizado.")
  