import { SET_FILTER, SET_ORDERS } from "./actions";
import store from "./store";
const initialstate = {
  allPshychologists: [
    {
      name: "Alice",
      age: 35,
      gender: "female",
      country: "Mexico",
      horario: "AM",
      precio: 100,
      score: 5,
      especializacion: "terapia familiar",
    },
    {
      name: "Bob",
      age: 40,
      gender: "male",
      country: "Argentina",
      horario: "PM",
      precio: 899,
      especializacion: "terapia de pareja",

    },
    {
      name: "Carol",
      age: 28,
      gender: "female",
      country: "Colombia",
      horario: "AM",
      precio: 32,
      score: 2,
      especializacion: "terapia de pareja",

    },
    {
      name: "David",
      age: 45,
      gender: "male",
      country: "Colombia",
      horario: "AM",
      precio: 124,
      score: 5,
      especializacion: "terapia psicoanalitica",

    },
    {
      name: "Eva",
      age: 32,
      gender: "female",
      country: "Mexico",
      horario: "PM",
      precio: 444,
      score: 1,
      especializacion: "terapia de pareja",

    },
    {
      name: "Frank",
      age: 50,
      gender: "male",
      country: "Argentina",
      horario: "AM",
      precio: 981,
      especializacion: "terapia familiar",

    },
    {
      name: "Grace",
      age: 29,
      gender: "female",
      country: "Venezuela",
      horario: "PM",
      precio: 333,
      score: 3,
      especializacion: "terapia de pareja",

    },
    {
      name: "Henry",
      age: 38,
      gender: "male",
      country: "Colombia",
      horario: "PM",
      precio: 555,
      score: 4,
      especializacion: "terapia psicoanalitica",

    },
  ],
  psychologists: [
    {
      name: "Alice",
      age: 35,
      gender: "female",
      country: "Mexico",
      horario: "AM",
      precio: 100,
      score: 5,
      especializacion: "terapia familiar",
    },
    {
      name: "Bob",
      age: 40,
      gender: "male",
      country: "Argentina",
      horario: "PM",
      precio: 899,
      especializacion: "terapia de pareja",

    },
    {
      name: "Carol",
      age: 28,
      gender: "female",
      country: "Colombia",
      horario: "AM",
      precio: 32,
      score: 2,
      especializacion: "terapia de pareja",

    },
    {
      name: "David",
      age: 45,
      gender: "male",
      country: "Colombia",
      horario: "AM",
      precio: 124,
      score: 5,
      especializacion: "terapia psicoanalitica",

    },
    {
      name: "Eva",
      age: 32,
      gender: "female",
      country: "Mexico",
      horario: "PM",
      precio: 444,
      score: 1,
      especializacion: "terapia de pareja",

    },
    {
      name: "Frank",
      age: 50,
      gender: "male",
      country: "Argentina",
      horario: "AM",
      precio: 981,
      especializacion: "terapia familiar",

    },
    {
      name: "Grace",
      age: 29,
      gender: "female",
      country: "Venezuela",
      horario: "PM",
      precio: 333,
      score: 3,
      especializacion: "terapia de pareja",

    },
    {
      name: "Henry",
      age: 38,
      gender: "male",
      country: "Colombia",
      horario: "PM",
      precio: 555,
      score: 4,
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

      const { gender, country, horario, especializacion } = action.payload;

      if (gender !== "all") {
        psyFiltered = psyFiltered.filter((psychologist) => psychologist.gender === gender);
      }

      if (country !== 'all') {
        psyFiltered = psyFiltered.filter((psychologist) => psychologist.country.toLowerCase() === country);
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
       
          
          
          
          
          
        case "alf":
          psyOrdered.sort((a, b) => a.name.localeCompare(b.name));
          allOrdered.sort((a, b) => a.name.localeCompare(b.name));
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