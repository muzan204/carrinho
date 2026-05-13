import React from "react";

// Redux
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

  // Estado do carrinho
  const cart = useSelector(
    (state) => state.cart
  );

  // Dispatch Redux
  const dispatch = useDispatch();

  // Adicionar produto
  const handleAdd = () => {

    const products = [
      {
        name: "Laptop Gamer",
        price: 4500,
        image:
          "https://cdn-icons-png.flaticon.com/512/679/679720.png"
      },
      {
        name: "Mouse RGB",
        price: 150,
        image:
          "https://cdn-icons-png.flaticon.com/512/2881/2881142.png"
      },
      {
        name: "Teclado Mecânico",
        price: 350,
        image:
          "https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
      }
    ];

    const randomProduct =
      products[
        Math.floor(Math.random() * products.length)
      ];

    dispatch(addItem(randomProduct));
  };

  // Remover produto
  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };

  // Total
  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div style={styles.page}>

      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>

          <h1 style={styles.title}>
            🛒 Carrinho Tech
          </h1>

          <p style={styles.subtitle}>
            Seu carrinho inteligente com React + Redux
          </p>

        </div>

        {/* Botão */}
        <button
          style={styles.addButton}
          onClick={handleAdd}
        >
          + Adicionar Produto
        </button>

        {/* Carrinho */}
        <div style={styles.cartBox}>

          <h2 style={styles.cartTitle}>
            Produtos no Carrinho
          </h2>

          {
            cart.length === 0 ? (

              <div style={styles.empty}>

                <img
                  src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                  alt=""
                  style={styles.emptyImage}
                />

                <p>
                  Seu carrinho está vazio
                </p>

              </div>

            ) : (

              <ul style={styles.list}>

                {
                  cart.map((item, index) => (

                    <li
                      key={index}
                      style={styles.item}
                    >

                      <div style={styles.productInfo}>

                        <img
                          src={item.image}
                          alt={item.name}
                          style={styles.image}
                        />

                        <div>

                          <strong style={styles.productName}>
                            {item.name}
                          </strong>

                          <p style={styles.price}>
                            R$ {item.price}
                          </p>

                        </div>

                      </div>

                      <button
                        style={styles.removeButton}
                        onClick={() => handleRemove(index)}
                      >
                        ✖
                      </button>

                    </li>

                  ))
                }

              </ul>

            )
          }

        </div>

        {/* Total */}
        <div style={styles.totalBox}>

          <h2>
            Total:
          </h2>

          <h1 style={styles.total}>
            R$ {total}
          </h1>

        </div>

      </div>

    </div>
  );
}

// Estilos
const styles = {

  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #141e30, #243b55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  container: {
    width: "100%",
    maxWidth: 700,
    background: "#fff",
    borderRadius: 20,
    padding: 30,
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.3)"
  },

  header: {
    textAlign: "center",
    marginBottom: 30
  },

  title: {
    margin: 0,
    fontSize: 40,
    color: "#222"
  },

  subtitle: {
    color: "#666"
  },

  addButton: {
    width: "100%",
    padding: 15,
    border: "none",
    borderRadius: 12,
    background: "#007bff",
    color: "#fff",
    fontSize: 18,
    cursor: "pointer",
    marginBottom: 25,
    fontWeight: "bold"
  },

  cartBox: {
    background: "#f8f9fa",
    borderRadius: 15,
    padding: 20
  },

  cartTitle: {
    marginTop: 0
  },

  empty: {
    textAlign: "center",
    padding: 20,
    color: "#777"
  },

  emptyImage: {
    width: 100,
    opacity: 0.5
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    boxShadow:
      "0 4px 10px rgba(0,0,0,0.08)"
  },

  productInfo: {
    display: "flex",
    alignItems: "center",
    gap: 15
  },

  image: {
    width: 60,
    height: 60,
    objectFit: "contain"
  },

  productName: {
    fontSize: 18
  },

  price: {
    color: "#007bff",
    fontWeight: "bold",
    margin: 0
  },

  removeButton: {
    background: "red",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "10px 14px",
    cursor: "pointer",
    fontSize: 16
  },

  totalBox: {
    marginTop: 25,
    textAlign: "center",
    background: "#141e30",
    color: "#fff",
    padding: 20,
    borderRadius: 15
  },

  total: {
    margin: 0,
    color: "#00ff99"
  }
};

export default App;