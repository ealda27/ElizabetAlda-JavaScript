var notaparcial1 = parseInt(prompt("Ingrese nota primer parcial cátedra Logística"))
var notaparcial2 = parseInt(prompt("Ingrese nota segundo parcial cátedra Logística"))
var notaparcial3 = parseInt(prompt("Ingrese nota tercer parcial cátedra Logística"))
var notatrabajopractico = parseInt(prompt("Ingrese nota trabajo practico cátedra Logística"))

var promedio = (notaparcial1 + notaparcial2 + notaparcial3 + notatrabajopractico) /4

if(promedio < 4){

    alert("Usted está reprobado, el promedio de la Cátedra de Logística es:" + promedio)

}else {
    alert ("Usted está aprobado,el promedio de la Cátedra de Logística es: "+ promedio)
}
