// ejemplos básicos de impresión de valores en consola
//Basic examples using the console tools
console.log( "Hello world" );
console.log( 200 );
console.log( true );
console.log( null );
var num = 10;
console.log( num );
console.log( "string", 10.11, true, false, null, num );

// Declaramos una función con parámetros y la ejecutamos
//Declare a function with parameters and execute it
function MakeCake(sugar_quan, eggs_quan){
     var instructions = "get the fluor,";
     instructions += "put it in the bowl.";
     instructions += " Add some eggs ("+ eggs_quan+"), sugar ("+ sugar_quan+"), milk spread and chocolate.";
     instructions += "Put it in the oven for 45 minutes, and it is ready!";
     return instructions;
}
// Ejecución de la función
// Executing a function
console.log(MakeCake("1 package", "6 eggs"));

//Definiendo arreglos  con propiedades y funciones
//Declaring arrays with props and functions
var car = {
    color : "green",
    size: "big",
    wheels: "6",
    engine: [{size: "2.3",
        fuel: "gasoline",
        valv: "16"},
        {size: "2.8",
        fuel: "gasoil",
        valv: "8"}
        ],
    drive : function(){ return "It´s a great car!";}
}
console.log(`The color of the car is: ${car.color}`);
console.log(car.drive);
//Si tecleas en la consola el nombre del arreglo te aparece -> car.engine//car.size
//Use the console tool. Type the name of the array and it should print -> car.engine
// otra forma de entrar -> car["engine"][0]
//Other way using the array position-> car["engine"][0]
//Para ejecutar la funcion car.drive() 
//To execute the function type in the console 'car.drive()'


//Defiendo arreglos como una lista
//Declaring array using a list
var autoParts = [
    "doors", "engine", "wheels", "Transmision", "Brakes"
]
//Si tecleas en la consola el nombre del arreglo te aparece
//If you type in the console the name of the array it should print it


//Toma el valor del input y lo muestro en otro texto
//Takes the input value and print it in another text element
function ImprimirValor(){
    console.log(document.getElementsByName("valor")[0].value);
    document.getElementById("valorRepetido").innerText = document.getElementsByName("valor")[0].value;
    return null;
}


//Toma un elemento y el cambia el estilo
//Takes an element and changes the styles
function CambiarEstilo(){
    var elemento = document.getElementById("valorRepetido");

    elemento.style.color = "red";
    return null;
}
     


function SetVariable(){
    var fullname = "Martín Landa";

    function concat (SetVariable){
        return "Sr." + fullname;
    }
    return concat(fullname);
}
var variableGlobal = "variable global";
var variableGlobal2 = "variable global2";
function EjemploVariablesAlcance(){
    //Creo una variable local con igual nombre, pero sólo la puedo acceder desde la función
    var variableGlobal = "Variable local interna";
    //Modifico la variable global, porque no estoy creando una nueva
    variableGlobal2 = "variable global modificada";
    return variableGlobal;
}

//Clases con funciones adentro
//Classes with functions inside of it
function Carro(largo, potencia, color, rakingPosition){
    this.largo = largo;
    this.potencia = potencia;
    this.color = color;
    this.rakingPosition = rakingPosition;
    this.id = Combine();
    function Combine(){
        return color + '_' + rakingPosition;
    }  
}


Carro.prototype={
    nombre: function(){return this.color + " devuelvo nombre del color"},
    largo: function(){return this.largo + " Devuelvo largo en cms"}
};

var car1 = new Carro(450, 3.4, 'blue', 4);
var car2 = new Carro(550, 3.6, 'red', 3);
var car3 = new Carro(650, 3.8, 'yellow', 2);
var car4 = new Carro(750, 4.0, 'green', 8);

//Operadores
//Operators
if(4=="4"){
    console.log("4 es igual a '4'");
}
if(4==="4"){
    console.log("4 es igual a '4', pero de diferentes tipos de datos");
}
if(5>4){
    console.log("5 es mayor a 4");
}
if(5<4){
    console.log("5 no es menor a 4");
}
if("Hello" == "Hellooo"){
    console.log("5 no es menor a 4");
}


//Operadores con funciones
//Operators with functions
function trafficLight(color, condicion)
{
    if((color == "verde") && (condicion == "auto")){
        return "Pasá";
    }
    else if((color == "rojo") && (condicion == "auto")){
        return "No pases";
    }
    else if((color == "verde") && (condicion == "humano")){
        return "Esperá!";
    }
    else if((color == "rojo") && (condicion == "humano")){
        return "Podés cruzar la calle";
    }
    else if((color == "amarillo") || (condicion== "perro")){
        return "Hacé lo que quieras, pero con cuidado!";
    }
    else{
        return "No sé qué decirte";
    }
}

//Ciclos con enteros
//Loops with integer values
function Contador(){
    for(var i = 0; i < 10; i++){
        console.log("El valor actual es -> " + i)
        }
}

//Ciclos con un arreglos
//Loops with a string array and integer values
var personas = ["Juan", "Carlos", "Julián", "Violeta", "Marquitos"];
function RecorrerArrayPersonas(){
    for(var i = 0; i < personas.length; i++){
        console.log("El valor actual es -> " + personas[i])
        }
}


//Ciclos con un string
//Loops with a string array without integer values
function RecorrerArrayPersonasSinInt(){
    for (var indice in personas){
        console.log(personas[indice]);
    }
}



//Vinculando elementos y eventos
//Linking html elements and js events
{
var boton3 = document.getElementById('boton3');
var select = document.getElementById('selectingColor');

boton3.onclick=(function(){
    console.log("apretaste el botón!");
})

select.addEventListener('click', boton3Evento);
select.addEventListener('click', boton3Evento2);

function boton3Evento(){
    console.log("Estás aprentando el select!");
}
function boton3Evento2(){
    if(select.style.color == "red"){
        select.style.color = "blue"
    }
    else{
        select.style.color = "red";
    }
}

}


var divNuevo = document.createElement('div');
divNuevo.style.cssText = "width: 200px; height: 20px; background: blue;";
divNuevo.onclick = function(){alert('Estás presionando el nuevo div!!')}
document.body.appendChild(divNuevo);

//cambiar color del div
//Changing div color
var color = document.getElementById('selectingColor');
color.addEventListener('change', cambiarColor);

function cambiarColor(){
    var e = document.getElementById('selectingColor').value;
    divNuevo.style.background = e;
}
//cambiar alto del div
//Changing div height
var alto = document.getElementById('selectingAltura');
alto.addEventListener('change', cambiarAlto);

function cambiarAlto(){
    var e = document.getElementById('selectingAltura').value;
    divNuevo.style.height = e;
}


//cambiar ancho del div
//Changing div width
var ancho = document.getElementById('selectingAncho');
ancho.addEventListener('change', cambiarAncho);

function cambiarAncho(){
    var e = document.getElementById('selectingAncho').value;
    divNuevo.style.width = e;
}


