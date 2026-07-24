
/* Declaro un array llamado=turnos para 
almacenar los turnos */
const nombre = ["Sandra", "Juan", "María", "Pedro", "Lucía", "Lizeth"];

/* Ahora creo un objeto para representar las caracteristicas del 
turno de Sandra */
const turnos = [ {

    /* Codigo= nombre de la propiedad*/
    /* "A-001"= Valor guardado de la propiedad*/
    codigo: "A-001",
    nombre: "Sandra Martinez",
    tramite: "Asignacion de cita",
    modulo: "Modulo 1",
    atendido: false
},

/* Ahora creo un objeto para representar las caracteristicas del 
turno de Juan */
{

    /* Codigo= nombre de la propiedad*/
    /* "A-001"= Valor guardado de la propiedad*/
    codigo: "A-002",
    nombre: "Juan Giraldo",
    tramite: "Asignacion de cita",
    modulo: "Modulo 2",
    atendido: false
},
/* Ahora creo un objeto para representar las caracteristicas del 
turno de María */
{

    /* Codigo= nombre de la propiedad*/
    /* "A-001"= Valor guardado de la propiedad*/
    codigo: "A-003",
    nombre: "María Marulanda",
    tramite: "Asignacion de cita",
    modulo: "Modulo 3",
    atendido: false
},
/* Ahora creo un objeto para representar las caracteristicas del 
turno de Pedro */
{

    /* Codigo= nombre de la propiedad*/
    /* "A-001"= Valor guardado de la propiedad*/
    codigo: "A-004",
    nombre: "Pedro Restrepo",
    tramite: "Asignacion de cita",
    modulo: "Modulo 4",
    atendido: false
},
/* Ahora creo un objeto para representar las caracteristicas del 
turno de Lucía */
{

    /* Codigo= nombre de la propiedad*/
    /* "A-001"= Valor guardado de la propiedad*/
    codigo: "A-005",
    nombre: "Lucía Bohorquez",
    tramite: "Asignacion de cita",
    modulo: "Modulo 2",
    atendido: false
},
/* Ahora creo un objeto para representar las caracteristicas del 
turno de Lizeth */
{

    /* Codigo= nombre de la propiedad*/
    /* "A-001"= Valor guardado de la propiedad*/
    codigo: "A-006",
    nombre: "Lizeth Londoño",
    tramite: "Asignacion de cita",
    modulo: "Modulo 4",
    atendido: false
}

];

/* Agrego las constantes para los nombres de los turnos */
/* const= Creo constante

   visorNumero= Nombre de la constante js que esta guardada en el HTML y
   que se mostrara como el numero grande del turno.

   = Es el poerador de asignacion que toma el resultado de la derecha y
   lo guarda en la constante de la izquierda.

   document= Representa todo el documento HTML que esta abierto en el
   navegador y representado en el archivo index.html.

   .= Es el punto que permite acceder a una propiedad o utilizar un 
   metodo que pertenece a document.

   gestElementById= Es el metodo de Js que busca un elemento del HTML
   por medio de su adributo ID para obtener el elemento por su id.

   ("visorNumero")= Es el dato que se le envia a gestElementById para 
   identificar que el ID debe ser buscado en el index.html osea un 
   elemento que tenga el atributo id="visorNumero".

   ;= indica que la instrucción de JavaScript terminó.
*/
const visorNumero = document.getElementById("visorNumero");
const visorModulo = document.getElementById("visorModulo");
const buscador = document.getElementById("buscador");
const contadorFila = document.getElementById("contadorFila");
const listaEspera = document.getElementById("listaEspera");
const mensajeVacio = document.getElementById("mensajeVacio");
const btnLlamar = document.getElementById("btnLlamar");
