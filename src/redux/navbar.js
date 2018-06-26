const GET_MENU = "GET_MENU"
const GET_SEARCH = "GET_SEARCH"

const initialState = {
    menu: false,
    search: false
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_MENU:
        return Object.assign({}, state, {menu: action.payload})
        case GET_SEARCH:
        return Object.assign({}, state, {search: action.payload})
        default:
        return state
    }
}

export function setMenu(bool){
    return {
        type: GET_MENU,
        payload: bool
    }
}
export function setSearch(bool){
    return {
        type: GET_SEARCH,
        payload: bool
    }
}