const mensajes = [
    "Invitación a reunión comunitaria",
    "Aviso sin fecha confirmada",
    "Convocatoria con lugar y hora definidos",
    "Mensaje que debe revisarse antes de publicar",
    "Recordatorio de entrega de actividades"
  ]
  
console.log("Revisión de mensajes comunitarios con for tradicional:")

for (let i = 0; i < mensajes.length; i = i + 1) {
  console.log("Mensaje", i + 1, ":", mensajes[i])
}

console.log("Revisión de mensajes comunitarios con for...of:")

for (const mensaje of mensajes) {
  console.log("Mensaje:", mensaje)
}

console.log("Revisión inicial de mensajes finalizada.")
