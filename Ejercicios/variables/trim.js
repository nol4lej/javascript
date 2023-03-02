
const div = document.getElementById("results");

window.onload = function(){
    //se remueve el elemento "<p>" con el texto "not content yet"
    let not = document.getElementById("not_content").remove();

    div.classList = "grid grid-cols-3 text-black gap-4";

    //creamos los input para almacenar las variables a y b.
    let input_a = document.createElement("input");
    let input_b = document.createElement("input");
    let buttonCam = document.createElement("button");
    let valor_final = document.createElement("p");

    valor_final.classList = "font-bold"

    buttonCam.classList = "bg-gray-400 hover:bg-gray-200 text-sm"
    buttonCam.textContent = "Intercambiar variables"
    buttonCam.id = "intercambiar";

    input_a.id = "variableA";
    input_a.placeholder = "Ingresa variable A";
    input_b.id = "variableB";
    input_b.placeholder = "Ingresa variable B";

    //adjuntamos los input en el contenedor div principal.
    div.append(input_a, input_b, buttonCam);

    let a = document.getElementById("variableA");
    let b = document.getElementById("variableB");
    let buton_intercambiar = document.getElementById("intercambiar");
    // let valor_aux;

    buton_intercambiar.addEventListener("click", () => {

        //la funcion trim() sirve para eliminar los espacios en blanco al principio y al final de los strings,
        //se puede utilizar en cualquier varible que sea una cadena de texto, da igual es string literal o como un objeto 'string'.
        //En este caso trim() es utilizado para comprobar si las variables A o B estan vacios, eliminando los espacios vacios. 
        if(a.value.trim() === "" || b.value.trim() === ""){
            console.log("Error: Los campos están incompletos.")
        } else{
            let valor_aux = a.value;
            let valor_a = b.value;
            let valor_b = valor_aux;

            console.log("Valores intercambiados, ahora A es: "+valor_a+" y B es: "+valor_b);
            valor_final.innerHTML = "variable A: "+valor_a+", variable B: "+valor_b;
            div.append(valor_final);

        }

    })

    console.log("Script loaded correctly.")
    console.log("Todo un clasico: Ingresa 2 variables para que intercambien su valor.")

}