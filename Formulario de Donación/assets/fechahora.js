
/* const d = new Date();
const localTime = d.getTime();
const localOffset = d.getTimezoneOffset() * 60000;
 
const utc = localTime + localOffset;
const offset = 4; // UTC of Dubai is +04.00
const dubai = utc + (3600000 * offset);
 
const dubaiTimeNow = new Date(dubai).toLocaleString();
*/

let texto;
let uso;

function fechaPais(texto, usoHorario) {

    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;

    let utc = localTime + localOffset;
    let offset = usoHorario;
    let pais = utc + (3600000 * offset);
    
    let paisTimeNow = new Date(pais).toLocaleString('es-AR', {hour12:false, hour:'2-digit',minute:'2-digit'});

    let resultado = texto + "&nbsp;" + paisTimeNow + "&nbsp;&nbsp;";
    return resultado;
};

let fecha = new Date()
document.write(fecha.toLocaleString('es-AR', {dateStyle:'long'})+"&nbsp;&nbsp;");
document.write(fechaPais('Argentina', -3));
document.write(fechaPais('España', 1));

