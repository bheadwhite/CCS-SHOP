const GET_MENU = "GET_MENU";
const GET_SEARCH = "GET_SEARCH";
const GET_CART = "GET_CART";
const GET_INVENTORY = "GET_INVENTORY"

const initialState = {
  menu: false,
  search: false,
  cart: ["wasssup buddy", "heyyyyyyy"],
  inventory: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENU:
      return Object.assign({}, state, { menu: action.payload });
    case GET_SEARCH:
      return Object.assign({}, state, { search: action.payload });
    case GET_CART:
      return Object.assign({}, state, { cart: action.payload });
    case GET_INVENTORY:
      return Object.assign({}, state, {inventory: action.payload})
    default:
      return state;
  }
}

export function setMenu(bool) {
  return {
    type: GET_MENU,
    payload: bool
  };
}
export function setSearch(bool) {
  return {
    type: GET_SEARCH,
    payload: bool
  };
}
export function getCart(data) {
  return {
    type: GET_CART,
    payload: data
  };
}
export function getInventory(data){
  return {
    type: GET_INVENTORY,
    payload: data
  }
}