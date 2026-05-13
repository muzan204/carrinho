import { createStore } from "redux";
import cartReducer from "./cartReducer";

// Criando a Store global
const store = createStore(cartReducer);

export default store;