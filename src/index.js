import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Importando Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Criando root
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Renderizando aplicação
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);