import { createStore } from "redux";

let initialState = {
    name: "",
    category: "",
    authorFirstName: "",
    authorLastName: "",
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const UPDATE_AUTHOR_FIRST_NAME = "UPDATE_AUTHOR_FIRST_NAME"
export const UPDATE_AUTHOR_LAST_NAME = "UPDATE_AUTHOR_LAST_NAME"
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS"
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS"
export const UPDATE_RECIPES = "UPDATE_RECIPES"


function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_NAME: 
        return {
            ...state,
            name: action.payload
        }
        case UPDATE_CATEGORY: 
        return {
            ...state,
            category: action.payload
        }
        case UPDATE_AUTHOR_FIRST_NAME: 
        return {
            ...state,
            authorFirstName: action.payload
        }
        case UPDATE_AUTHOR_LAST_NAME: 
        return {
            ...state,
            authorLastName: action.payload
        }
        case UPDATE_INGREDIENTS:
        let newList = [...state.ingredients,action.payload]
        console.log(newList)
        return{
            ...state,
            ingredients: newList
        }
        case UPDATE_INSTRUCTIONS:
        console.log(action.payload)
        let newInstructions = [...state.instructions, action.payload]
        console.log(newInstructions)
        return{
            ...state,
            instructions: newInstructions
        }
        case UPDATE_RECIPES: 
        const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      };
      let newRecipes = [...state.recipes,recipe]
      return {
          ...state,
          recipes: newRecipes
      }
        default: return state
    }
}


export default createStore(reducer)
