/*
 * Reto #48
 * EL CALENDARIO DE ADEVIENTO 2022
 * Fecha publicación enunciado: 28/11/22
 * Fecha publicación resolución: 05/12/22
 * Dificultad: FÁCIL
 *
 * ¿Conoces el calendario de adviento de la comunidad (https://adviento.dev)?
 * 24 días, 24 regalos sorpresa relacionados con desarrollo de software, ciencia y tecnología desde el 1 de diciembre.
 *
 * Enunciado: Crea una función que reciba un objeto de tipo "Date" y retorne lo siguiente:
 * - Si la fecha coincide con el calendario de aDEViento 2022: Retornará el regalo de ese día (a tu elección) y cuánto queda para que finalice el sorteo de ese día.
 * - Si la fecha es anterior: Cuánto queda para que comience el calendario.
 * - Si la fecha es posterior: Cuánto tiempo ha pasado desde que ha finalizado.
 *
 * Notas:
 * - Tenemos en cuenta que cada día del calendario comienza a medianoche 00:00:00 y finaliza a las 23:59:59.
 * - Debemos trabajar con fechas que tengan año, mes, día, horas, minutos y segundos.
 * - 🎁 Cada persona que aporte su solución entrará en un nuevo sorteo del calendario de aDEViento hasta el día de su corrección (sorteo exclusivo para quien entregue su solución).
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */
 
function isAdvientoCalendar(date){
  let startDate = new Date('2022-12-01 00:00:00')
  let endDate = new Date('2022-12-25 00:00:00')
  let currentDate = new Date(date)
  let presents = ['Libro sobre Engineer management', 'Mentoría sobre Arquitectura', 'Curso de Python']
  let randomNumber = Math.floor(Math.random() * presents.length)
  let dayMilliseconds = 1000 * 60 * 60 * 24;
  
  if (currentDate.getTime() >= startDate.getTime() && currentDate.getTime() < endDate.getTime()){
    console.log(presents[randomNumber])
  } else if (currentDate.getTime() >= startDate.getTime()) {
    let difference = new Date((endDate.getTime() - currentDate.getTime()) / dayMilliseconds)
    console.log(difference.toLocaleString())
  } else {
    console.log('antes')
  }
}
