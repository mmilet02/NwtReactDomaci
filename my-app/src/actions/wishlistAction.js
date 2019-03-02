import { DODAJ, MAKNI } from "./actionTypes";

export function dodajFav(proizvod) {
  return function(dispatch) {
    dispatch({ type: DODAJ, item: proizvod });
  };
}

export function makniFav(proizvod) {
  return function(dispatch) {
    dispatch({ type: MAKNI, item: proizvod });
  };
}
