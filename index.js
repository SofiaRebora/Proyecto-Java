console.log("Promedio trimestral del alumno");

    let saludo = prompt (
        "Bienvenido/a al campus de la Facultad de Derecho, si desea continuar indique: Si o Salir"
    );

nombreAlumno = prompt ("Ingrese su nombre:");
let nota1=parseInt(prompt("Ingrese la primera nota"));
let nota2=parseInt(prompt("Ingresa la segunda nota"));
let nota3=parseInt(prompt("ingrese la tercer nota"));


let promedio = (nota1 + nota2 + nota3) /3
parseInt(promedio)

    if(promedio>21 && promedio<=30){
        document.write("El promedio es" + promedio + "Felicitaciones, usted Aprobó.");
    }else {
        if (promedio >=0 && promedio <=20){
        document.write("El promedio es" + promedio + "Lo siento, usted desaprobó.");
    }
    else {
        alert("Ingresaste una nota fuera de rango");
    }
}

console.log("Alumno/a" + nombreAlumno + ", su promedio final es de: " + promedio);