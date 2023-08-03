import { SET_FILTER } from "./actions";
const initialstate = {
    allPshychologists: [
        {
          name: "Alice",
          age: 35,
          gender: "female",
          country: "Mexico"
        },
        {
          name: "Bob",
          age: 40,
          gender: "male",
          country: "Argentina"
        },
        {
          name: "Carol",
          age: 28,
          gender: "female",
          country: "Colombia"
        },
        {
          name: "David",
          age: 45,
          gender: "male",
          country: "Colombia"
        },
        {
          name: "Eva",
          age: 32,
          gender: "female",
          country: "Mexico",
        },
        {
          name: "Frank",
          age: 50,
          gender: "male",
          country: "Argentina"
        },
        {
          name: "Grace",
          age: 29,
          gender: "female",
          country: "Venezuela"
        },
        {
          name: "Henry",
          age: 38,
          gender: "male",
          country: "Colombia",
        },
      ],
    psychologists: []
}
const rootReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_FILTER:
            let psyFiltered = [...state.allPshychologists]
            const filters = action.payload;
            if (filters.gender !== "all") {
                psyFiltered = psyFiltered.filter((psychologist) => psychologist.gender === filters.gender);
            }
            
            if(filters.country !== 'all'){
                psyFiltered = psyFiltered.filter((psychologist) => psychologist.country.toLowerCase() === filters.country);
            }
            console.log(psyFiltered)

            //se puede poner un alert si no se encuentrar resultados
            return {...state, psychologists: psyFiltered }
    }
}

export default rootReducer;