const GET_MENU = "GET_MENU";
const GET_SEARCH = "GET_SEARCH";
const GET_INVENTORY = "GET_INVENTORY";

const initialState = {
  menu: false,
  search: false,
  inventory: [],
  query: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENU: //changes state to update css class
      return Object.assign({}, state, { menu: action.payload });
    case GET_SEARCH: //this changes state to update css class
      return Object.assign({}, state, { search: action.payload });
    case GET_INVENTORY: // gets inventory from database based off search results. & sets search path
     return Object.assign({}, state, { inventory: action.payload, query: action.query});
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
export function getInventory(data, query) {
  return {
    type: GET_INVENTORY,
    payload: data,
    query: query
  };
}
