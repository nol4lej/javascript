// let producto = 100;
// let iva = 21;
// let total = 100 * 21 / 100
// console.log(total)

// funcion anonima que se ejecutara automaticamente una vez que se haya cargado completamente la ventana del navegador.
// la funcion crea los elementos para ingresar los valores a calcular en la funcion principal.

// se captura el contenedor donde se integrarán los datos
const div = document.getElementById("results");

// evento onload para cargar todos los elementos del ejercicio apenas cargue el archivo.
window.onload = function() {
    // remueve el elemento <p>Not content yet.</p>
    let not = document.getElementById("not_content").remove()

    div.classList = "grid grid-cols-1 md:grid-cols-3 gap-4 text-black";

    // se crean los elementos input y button para trabajar los datos del ejercicio.
    let input_producto = document.createElement("input");
    let input_iva = document.createElement("input");
    let button_input = document.createElement("button");
    let resultado_final = document.createElement("p");

    // para agregar id/type/number y demas atributos, tambien existe:
    // input_producto.setAttribute("id", "inputProd"); // Solo acepta 2 argumentos: el nombre del atributo y su valor"
    // producto
    input_producto.id = "inputProd";
    input_producto.type = "number"
    input_producto.placeholder = "Ingresa el valor de un producto"
    input_producto.min = 0;
    // iva
    input_iva.id = "inputIva";
    input_iva.type = "number";
    input_iva.placeholder = "Ingresa el IVA"
    input_iva.min = 0;
    input_iva.max = 100;

    // button
    button_input.id = "calcular";
    button_input.type = "button";
    button_input.textContent = "Calcular total"
    button_input.classList = "bg-gray-400 hover:bg-gray-200"

    // se adjuntan (append) los elementos al contenedor
    div.append(input_producto, input_iva, button_input);

    let producto = document.getElementById("inputProd");
    let iva = document.getElementById("inputIva");
    let calcularBtn = document.getElementById("calcular");

    calcularBtn.addEventListener("click", () => {
        let valor1 = parseFloat(producto.value);
        let valor2 = parseFloat(iva.value);

        const resultado_iva = valor1 * valor2 / 100;
        const resultado_masIva = valor1 + resultado_iva;
        console.log(resultado_masIva)

        resultado_final.classList = "grid col-span-1 md:col-span-3 font-bold";
        resultado_final.innerHTML = "El valor total + el IVA es: " + resultado_masIva;
        div.append(resultado_final);

    })
}
