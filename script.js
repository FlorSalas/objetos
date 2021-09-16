//1)a) Crear un constructor de personas con las siguientes características: Nombre, apodo, hobbies, película favorita, lugar de residencia. 
//b) Agregarle un método que muestre por consola un mensaje personalizado presentándose con su nombre y características definidas.
//(Ej: “Hola, soy Gerardo pero me dicen Gerard, soy de Miramar y mis hobbies son…”)
//c) Crear una instancia del objeto persona por cada persona que haya en su equipo. 
//d) Luego , mostrar por consola el saludo personalizado de cada uno :)


class Compañeros {

    constructor(nombre, apodo, hobbies, pelicula, ciudad){

        this.nombre= nombre;
        this.apodo= apodo;
        this.hobbies= hobbies;
        this.pelicula= pelicula;
        this.ciudad= ciudad;

        this.ver= ()=>{
            console.log(`Mi nombre es ${this.nombre}, me dicen ${this.apodo} y vivo en ${this.ciudad}. Mi hobbie es ${this.hobbies} y mi pelicula favorita es ${this.pelicula}.`)
        }
    }
}

const Abril= new Compañeros("Abril", "Abru", "cocinar", "Beetlejuice", "Capital Federal")
const Emanuel= new Compañeros("Emanuel", "Ema", ["aprender ruso", "tocar la guitarra"], "Harry Potter", "Mar del Plata")
const Lucas= new Compañeros("Martin", "Tincho", "escuchar musica", "La historia sin fin", "San Miguel")


Abril.ver();
Emanuel.ver();
Lucas.ver();

//2) a) Crear un tipo de objeto “cuenta bancaria” que tenga los siguientes datos: Tipo de cuenta (Caja de ahorro, o cuenta corriente), saldo, titular y red que opera (link o Banelco).
//b) Incluir la acción de retirar dinero, que reciba un parámetro y actualice el nuevo valor del saldo.
//c) Incluir la acción de depositar dinero, que recibe un parámetro y actualice el nuevo valor del saldo.
//d) Incluir la acción de mostrar un saludo personalizado al titular, dandole la bienvenida a su red. (“Ej: Bienvenida Claudia a la red Banelco”).
//e) Incluir la acción de mostrar el saldo.
//f) Incluir otras acciones que consideren.
//g) Crear diferentes instancias y probar las acciones.

// const cuantoRetira="";

// class General{

//     constructor(tipoCuenta, saldo, titular, red){

//         this.tipoCuenta= tipoCuenta;
//         this.saldo= saldo;
//         this.titular= titular;
//         this.red= red;

//         this.operacion= ()=>{
//             console.log(`Hola ${this.titular}. Tu saldo en tu ${this.tipoCuenta} es de ${this.saldo}. Si deseas retirar o ingresar dinero podes hacerlo desde cualquier cajero de la red ${this.red}.`)
//         }

//     //     this.nuevoSaldo= function (RetiraDinero){
//     //         this.saldo= RetiraDinero
//     //     }
//     }
// }

// const Usuario= new General("Caja de ahorro", 100000, "Clark Kent", "Banelco")
// const Usuario2= new General("Cuenta corriente", 50000, "Bruce Banner", "Link")


// const infoInput=  document.querySelector("#numeros")
// const accionRetiro= document.querySelector("#retirar")
// const accionDeposito= document.querySelector("#depositar")


// const funcionRetiroDinero= ()=>{
//     document.write(`<p>¿Cuanto dinero desea retirar?</p>`)
//     document.write(`<input type="text" id="numeros" placeholder="Ingrese la cantidad a retirar" onblur="informacion()"></input>`)

// }




// const informacion= ()=>{
//    cuantoRetira= infoInput.value
// }

// // Usuario.nuevoSaldo(cuantoRetira);
// Usuario.operacion();

