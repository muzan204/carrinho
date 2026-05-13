import React from "react";

// Hooks do Redux
import {
  useSelector,
  useDispatch
} from "react-redux";

// Actions
import {
  addItem,
  removeItem
} from "./redux/cartActions";

function App() {

  // Pegando dados do Redux
  const cart = useSelector(
    (state) => state.cart
  );

  // Disparar ações
  const dispatch = useDispatch();

  // Adicionar produto
  const handleAdd = () => {

    const product = {
      name: "Laptop Gamer",
      price: 4500
    };

    dispatch(addItem(product));
  };

  // Remover produto
  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>
        🛒 TechGear Cart
      </h1>

      <button
        style={styles.addButton}
        onClick={handleAdd}
      >
        Adicionar Laptop
      </button>

      <h2>
        Itens no Carrinho
      </h2>

      {
        cart.length === 0 ? (
          <p>Carrinho vazio</p>
        ) : (
          <ul style={styles.list}>
            {
              cart.map((item, index) => (
                <li
                  key={index}
                  style={styles.item}
                >

                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    R$ {item.price}
                  </div>

                  <button
                    style={styles.removeButton}
                    onClick={() => handleRemove(index)}
                  >
                    Remover
                  </button>

                </li>
              ))
            }
          </ul>
        )
      }

    </div>
  );
}

// Estilos
const styles = {

  container: {
    padding: 30,
    fontFamily: "Arial",
    maxWidth: 500,
    margin: "auto"
  },

  title: {
    color: "#222"
  },

  addButton: {
    padding: "10px 20px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    marginBottom: 20
  },

  removeButton: {
    padding: "6px 12px",
    background: "red",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  },

  list: {
    listStyle: "none",
    padding: 0
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f4f4f4",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10
  }
};

export default App;