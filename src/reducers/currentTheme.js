import { THEME } from "../actions/types.js";
import { dark } from "../constants/themes.js";

export default function(state = dark, action) {
  switch (action.type) {
    case THEME:
      return action.payload;
    default:
      return state;
  }
}
