import { ACTION_TYPE } from "./action-types-products";

const initialState = {
  products: [],
};

// Create a "reducer" function that determines what the new state
// should be when something happens in the app
export function Products(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case ACTION_TYPE.GET:
      return { ...state, products: action.payload };

    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}
