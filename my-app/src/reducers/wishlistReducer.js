import { DODAJ, MAKNI } from "../actions/actionTypes";

let pocetnoStanje = {
  items: []
};

export default function favoriti(state = pocetnoStanje, action) {
  switch (action.type) {
    case DODAJ:
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case MAKNI:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.item.id)
      };
    default:
      return state;
  }
}
