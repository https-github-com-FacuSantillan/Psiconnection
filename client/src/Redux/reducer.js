import { SET_FILTER, SET_ORDERS } from "./actions";
import store from "./store";
const initialstate = {
  //Todos los psicologos
  allPshychologists: [
    {
      id: 1,
      nombre: "Alice",
      edad: 35,
      genero: "female",
      pais: "Mexico",
      horario: "AM",
      precio: 100,
      valoracion: 5,
      especializacion: "terapia familiar",
    },
    {
      id: 2,
     
      nombre: "Bob",
      edad: 40,
      genero: "male",
      pais: "Argentina",
      horario: "PM",
      precio: 899,
      especializacion: "terapia de pareja",

    },
    {
      id: 3,
      nombre: "Carol",
      edad: 28,
      genero: "female",
      pais: "Colombia",
      horario: "AM",
      precio: 32,
      valoracion: 2,
      especializacion: "terapia de pareja",

    },
    {
      id: 4,
      nombre: "David",
      edad: 45,
      genero: "male",
      pais: "Colombia",
      horario: "AM",
      precio: 124,
      valoracion: 5,
      especializacion: "terapia psicoanalitica",

    },
    {
      id: 5,
      nombre: "Eva",
      edad: 32,
      genero: "female",
      pais: "Mexico",
      horario: "PM",
      precio: 444,
      valoracion: 1,
      especializacion: "terapia de pareja",

    },
    {
      id: 6,
      nombre: "Frank",
      edad: 50,
      genero: "male",
      pais: "Argentina",
      horario: "AM",
      precio: 981,
      especializacion: "terapia familiar",

    },
    {

      id: 7,
      nombre: "Grace",
      edad: 29,
      genero: "female",
      pais: "Venezuela",
      horario: "PM",
      precio: 333,
      valoracion: 3,
      especializacion: "terapia de pareja",

    },
    {
      id: 8,
      nombre: "Henry",
      edad: 38,
      genero: "male",
      pais: "Colombia",
      horario: "PM",
      precio: 555,
      valoracion: 4,
      especializacion: "terapia psicoanalitica",
    },
  ],
  //Psicolos que se renderizan
  psychologists: [
    {
      id: 1,
      nombre: "Alice",
      edad: 35,
      genero: "female",
      pais: "Mexico",
      horario: "AM",
      precio: 100,
      valoracion: 5,
      especializacion: "terapia familiar",
    },
    {
      id: 2,
      nombre: "Bob",
      edad: 40,
      genero: "male",
      pais: "Argentina",
      horario: "PM",
      precio: 899,
      especializacion: "terapia de pareja",
    },
    {
      id: 3,
      nombre: "Carol",
      edad: 28,
      genero: "female",
      pais: "Colombia",
      horario: "AM",
      precio: 32,
      valoracion: 2,
      especializacion: "terapia de pareja",
    },
    {
      id: 4,
      nombre: "David",
      edad: 45,
      genero: "male",
      pais: "Colombia",
      horario: "AM",
      precio: 124,
      valoracion: 5,
      especializacion: "terapia psicoanalitica",
    },
    {
      id: 5,
      nombre: "Eva",
      edad: 32,
      genero: "female",
      pais: "Mexico",
      horario: "PM",
      precio: 444,
      valoracion: 1,
      especializacion: "terapia de pareja",
    },
    {
      id: 6,
      nombre: "Frank",
      edad: 50,
      genero: "male",
      pais: "Argentina",
      horario: "AM",
      precio: 981,
      especializacion: "terapia familiar",
    },
    {
      id: 7,
      nombre: "Grace",
      edad: 29,
      genero: "female",
      pais: "Venezuela",
      horario: "PM",
      precio: 333,
      valoracion: 3,
      especializacion: "terapia de pareja",
    },
    {
      id: 8,
      nombre: "Henry",
      edad: 38,
      genero: "male",
      pais: "Colombia",
      horario: "PM",
      precio: 555,
      valoracion: 4,
      especializacion: "terapia psicoanalitica",

    },
  ],

  psychoOrdered: []
}

const rootReducer = (state = initialstate, action) => {
  //Cuando se haga el GET PSY se debe hacer que tanto allPsy como psy contentgan todos los psicologos
  switch (action.type) {
    case SET_FILTER:
      let psyFiltered = [...state.psychoOrdered]

      const { genero, pais, horario, especializacion } = action.payload;

      if (genero !== "all") {
        psyFiltered = psyFiltered.filter((psychologist) => psychologist.genero === genero);
      }

      if (pais !== 'all') {
        psyFiltered = psyFiltered.filter((psychologist) => psychologist.pais.toLowerCase() === pais);
      }

      if (horario != 'all') {
        psyFiltered = psyFiltered.filter((psychologist) => psychologist.horario === horario)
      }

      if (especializacion != "all") {
        psyFiltered = psyFiltered.filter((psychologist) => psychologist.especializacion.toLowerCase() === especializacion)
      }
      console.log(psyFiltered)
      //se puede poner un alert si no se encuentrar resultados
      return { ...state, psychologists: psyFiltered }

    case SET_ORDERS:
      const order = action.payload;
      let psyOrdered = [...state.psychologists];
      let allOrdered = [...state.allPshychologists];

      switch (order) {
        case "desPr":
          psyOrdered.sort((a, b) => a.precio - b.precio);
          allOrdered.sort((a, b) => a.precio - b.precio);
          break;
        case "ascPr":
          psyOrdered.sort((a, b) => b.precio - a.precio);
          allOrdered.sort((a, b) => b.precio - a.precio);
          break;
        case "desPu":
          psyOrdered.sort((a, b) => {
            if (a.score === undefined && b.score === undefined) {
              return 0; // Ambos elementos no tienen puntuación, no hay cambio en el orden
            } else if (a.score === undefined) {
              return 1; // El elemento 'a' no tiene puntuación, lo colocamos al final
            } else if (b.score === undefined) {
              return -1; // El elemento 'b' no tiene puntuación, lo colocamos al final
            } else {
              return b.score - a.score; // Ambos elementos tienen puntuación, orden normal
            }
          });
          allOrdered.sort((a, b) => {
            if (a.score === undefined && b.score === undefined) {
              return 0; // Ambos elementos no tienen puntuación, no hay cambio en el orden
            } else if (a.score === undefined) {
              return 1; // El elemento 'a' no tiene puntuación, lo colocamos al final
            } else if (b.score === undefined) {
              return -1; // El elemento 'b' no tiene puntuación, lo colocamos al final
            } else {
              return b.score - a.score; // Ambos elementos tienen puntuación, orden normal
            }
          });
          break;






          case "desPu":
            psyOrdered.sort((a, b) => {
              if (a.valoracion === undefined && b.valoracion === undefined) {
                return 0; // Ambos elementos no tienen puntuación, no hay cambio en el orden
              } else if (a.valoracion === undefined) {
                return 1; // El elemento 'a' no tiene puntuación, lo colocamos al final
              } else if (b.valoracion === undefined) {
                return -1; // El elemento 'b' no tiene puntuación, lo colocamos al final
              } else {
                return b.valoracion - a.valoracion; // Ambos elementos tienen puntuación, orden normal
              }
            });
            allOrdered.sort((a, b) => {
              if (a.valoracion === undefined && b.valoracion === undefined) {
                return 0; // Ambos elementos no tienen puntuación, no hay cambio en el orden
              } else if (a.valoracion === undefined) {
                return 1; // El elemento 'a' no tiene puntuación, lo colocamos al final
              } else if (b.valoracion === undefined) {
                return -1; // El elemento 'b' no tiene puntuación, lo colocamos al final
              } else {
                return b.valoracion - a.valoracion; // Ambos elementos tienen puntuación, orden normal
              }
            });
            break;
        case "alf":
          psyOrdered.sort((a, b) => a.nombre.localeCompare(b.nombre));
          allOrdered.sort((a, b) => a.nombre.localeCompare(b.nombre));
          break;
        default:
          break;
      }

      console.log(psyOrdered);

      return { ...state, psychologists: psyOrdered, psychoOrdered: allOrdered };
    default: return state
  }


}

export default rootReducer;