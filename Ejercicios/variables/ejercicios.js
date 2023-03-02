// let producto = 100;
// let iva = 21;
// let total = 100 * 21 / 100
// console.log(total)

// funcion anonima que se ejecutara automaticamente una vez que se haya cargado completamente la ventana del navegador.
// la funcion crea los elementos para ingresar los valores a calcular en la funcion principal.

const div = document.getElementById("results");

window.onload = function() {
    // remueve el elemento <p>Not content yet.</p>
    let not = document.getElementById("not_content").remove()
    let input_producto = document.createElement("input");
    let input_iva = document.createElement("input");
    let button_input = document.createElement("button");

    // para agregar id/type/number y demas atributos, tambien existe:
    // input_producto.setAttribute("id", "inputProd"); // Solo acepta 2 argumentos: el nombre del atributo y su valor"
    input_producto.id = "inputProd";
    input_producto.type = "number"
    input_producto.placeholder = "Ingresa el valor de un producto"
    input_producto.min = 0;
    // IVA
    input_iva.id = "inputIva";
    input_iva.type = "number";
    input_iva.placeholder = "Ingresa el IVA"
    input_iva.min = 0;
    input_iva.max = 100;

    // button


    // div.classList.add("asd")
    div.append(input_producto, input_iva, button_input);
}

let producto = document.getElementById("inputProd");
let iva = document.getElementById("inputIva");

function Porcentaje(producto, iva){
    return total = producto * iva / 100;
}