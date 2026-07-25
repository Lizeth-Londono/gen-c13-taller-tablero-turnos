
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

/* Creo la función pintarFila para convertir los objetos del 
arreglo turnos en elementos visibles dentro de la lista de espera del
HTML */
function pintarFila() {

    /* Con listaEspera.innerHTML = ""; limpio la lista de espera para 
    que no se dupliquen los turnos */
    listaEspera.innerHTML = "";

    /* Con for recorro el arreglo turnos y en cada vuelta la variable 
    turno representa uno de los objetos */
    for (const turno of turnos) {

        /* Con const elementoTurno = document.createElement("li"); 
        creo un elemento li que representa una fila completa de
        un turno*/
        const elementoTurno = document.createElement("li");

        /* Con agrego la clase turno porque el archivo styles.css ya
        tiene estilos preparados para la clase entregado por la profe*/
        elementoTurno.classList.add("turno");

        /*===========================================================*/
        /* EL CODIGO ↓
        /*===========================================================*/

        /* Con const codigoTurno = document.createElement("span"); 
        creo un span para mostrar el codigo del turno*/
        const codigoTurno = document.createElement("span");

        /* Con codigoTurno.classList.add("turno__codigo"); agrego 
        la clase que espera el CSS de la profe*/
        codigoTurno.classList.add("turno__codigo");

        /* Con odigoTurno.textContent = turno.codigo; coloco como texto 
        el codigo que viene del objeto turno*/
        codigoTurno.textContent = turno.codigo;

        /*===========================================================*/

        /* Con const datosTurno = document.createElement("div"); creo 
        un div para agrupar el nombre y el tramite*/
        const datosTurno = document.createElement("div");

        /* Con datosTurno.classList.add("turno__datos"); agrego la 
        clase correspondiente*/
        datosTurno.classList.add("turno__datos");

        /*===========================================================*/
        /* EL NOMBRE Y TRAMITE ↓
        /*===========================================================*/

        /* Con const nombreTurno = document.createElement("p"); creo 
        un parrafo para mostrar el nombre del turno*/
        const nombreTurno = document.createElement("p");

        /* Con nombreTurno.classList.add("turno__nombre"); agrego la 
        clase que espera el CSS de la profe*/
        nombreTurno.classList.add("turno__nombre");

        /* Con nombreTurno.textContent = turno.nombre; coloco el 
        nombre de la persona como contenido*/
        nombreTurno.textContent = turno.nombre;

        /*===========================================================*/

        /* Con const tramiteTurno = document.createElement("p"); creo 
        un parrafo para mostrar el tramite del turno*/
        const tramiteTurno = document.createElement("p");

        /* Con tramiteTurno.classList.add("turno__tramite"); agrego 
        la clase correspondiente*/
        tramiteTurno.classList.add("turno__tramite");

        /* Con tramiteTurno.textContent = turno.tramite; coloco el 
        tramite de la persona como texto*/
        tramiteTurno.textContent = turno.tramite;

        /*===========================================================*/
        /* EL MODULO ↓
        /*===========================================================*/

        /* Con const moduloTurno = document.createElement("p"); creo 
        un parrafo para mostrar el modulo del turno*/
        const moduloTurno = document.createElement("p");

        /* Con moduloTurno.classList.add("turno__modulo"); agrego 
        la clase correspondiente*/
        moduloTurno.classList.add("turno__modulo");

        /* Con moduloTurno.textContent = turno.modulo; coloco el 
        modulo de la persona como texto*/
        moduloTurno.textContent = turno.modulo;

        /*===========================================================*/
        /* EL ESTADO ↓
        /*===========================================================*/

        /* Con const estadoTurno = document.createElement("span"); creo 
        un span para mostrar el estado del turno*/
        const estadoTurno = document.createElement("span");

        /* Con estadoTurno.classList.add("turno__estado"); agrego 
        la clases que espera el CSS de la profe*/
        estadoTurno.classList.add("turno__estado");

        /* Con estadoTurno.textContent = "En espera"; creo que por 
        ahora todos los turnos comienza en espera*/
        estadoTurno.textContent = "En espera";

        /* Con 
           datosTurno.appendChild(nombreTurno);
           datosTurno.appendChild(tramiteTurno);agrego el nombre y 
           el tramite dentro del div de datos y el orden importa*/
        datosTurno.appendChild(nombreTurno);
        datosTurno.appendChild(tramiteTurno);

        /*===========================================================*/
        /* AGREGAT TODOS LOS ELEMENTOS DENTRO DEL (li) ↓
        /*===========================================================*/

        /* Con 
           elementoTurno.appendChild(codigoTurno);
           elementoTurno.appendChild(datosTurno);
           elementoTurno.appendChild(moduloTurno);
           elementoTurno.appendChild(estadoTurno);
        agrego todos los elementos dentro del li y deben entrar
        en el mismo orden indicando por el taller*/
        elementoTurno.appendChild(codigoTurno);
        elementoTurno.appendChild(datosTurno);
        elementoTurno.appendChild(moduloTurno);
        elementoTurno.appendChild(estadoTurno);

        /*===========================================================*/
        /* FINALMENTE AGREGO EL (li) A LA LISTA DE ESPERA ↓
        /*===========================================================*/

        /* Con listaEspera.appendChild(elementoTurno); agrego el li 
        a la lista de espera*/
        listaEspera.appendChild(elementoTurno);

    }

}

/*===========================================================*/     
/* REPETIR LO MISMO CON EL SIGUIENTE TURNO 
/*===========================================================*/

/* Con pintarFila(); llamo a la funcion una vez para que los turnos aparezcan al
cargar la pagina*/
pintarFila();

/*===========================================================*/     
/* AQUI COMIENZA EL PUNTO 2 DEL TALLER
/*===========================================================*/

/* Creo con function llamarSiguiente() {} la funcion llamarSiguiente para buscar
el primer turno que todavia no haya sido atendido*/
function llamarSiguiente() {

    /* Ahora con for (const turno of turnos) {} recorro el arreglo de 
    turnos desde el primero hasta el ultimo y cada vuelta de turno 
    representa uno de los objetos*/
    for (const turno of turnos) {

        /* Con if (turno.atendido === false) {} reviso si la propiedad 
        atendida del turno actual es false= persona que todavia no es 
        atendida*/
        if (turno.atendido === false) {

            /* Con cambio atendido a true para registrar que este turno
            ya fue llamado*/
            turno.atendido = true;

            /* Con visorNumero.textContent = turno.codigo; muestro el 
            codigo del turno en el numero grande del
            visor*/
            visorNumero.textContent = turno.codigo;

            /* Con visorModulo.textContent = turno.modulo; muestro el 
            modulo asignado debajo del codigo*/
            visorModulo.textContent = turno.modulo;

            /* Con pintarFila(); vuelvo a pintar la fila para que la pantalla
            se construya nuevamente utilizando la informacion actualizada*/
            pintarFila();

            /* Con return; termino inmediatamente la funcion y esto 
            evita que un solo clic atienda a todos los turnos despues 
            de encontrar el primero disponible, entonces el piensa asi:
            Yo no sigo recorriendo el arreglo mas*/
            return;

        }

    }

    /* Ahora con solamente se ejecutara cuando el ciclo termino y no
    encontro ningun turno con atendido en false, entonces ya no quedaria
    nadie esperando*/
    visorNumero.textContent = "- - -";
    visorModulo.textContent = "No hay turnos";

}

/* Enconces procedo a conectar con la funcion llamarSiguiente a travez 
del boton y cuando la persona haga clic en el Js ejecutara la funcion*/
btnLlamar.addEventListener("click", llamarSiguiente);

/* Y con ejecuto pintarFIla una vez cuando se carga la pagina para que
se vea los turnos iniciales*/
pintarFila();