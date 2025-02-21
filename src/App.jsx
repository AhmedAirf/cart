import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/prod/Items";

const App = () => {
  const [products, setProducts] = useState([
    { id: 0, name: "shipcy", price: 100, items: 1 },
    { id: 1, name: "pepsi", price: 200, items: 1 },
    { id: 2, name: "molto", price: 300, items: 1 },
    { id: 3, name: "kranshy", price: 400, items: 1 },
    { id: 4, name: "cigaretes", price: 500, items: 1 },
  ]);
  const [addedProducts] = useState([
    { id: 0, name: "shipcy", price: 100, items: 1 },
    { id: 1, name: "pesi", price: 200, items: 1 },
    { id: 2, name: "molto", price: 300, items: 1 },
    { id: 3, name: "kranshy", price: 400, items: 1 },
    { id: 4, name: "cigaretes", price: 500, items: 1 },
  ]);

  const add = (id) => {
    const uptadedItems = products.map((product) => {
      if (product.id == id) {
        product.items += 1;
      }
      return product;
    });
    setProducts(uptadedItems);
  };

  const remove = (id) => {
    const removedItems = products.map((product) => {
      if (product.id == id && product.items > 0) {
        product.items -= 1;
      }
      return product;
    });
    setProducts(removedItems);
  };

  const del = (id) => {
    const deletedItems = products.filter((product) => product.id !== id);
    setProducts(deletedItems);
  };

  const reset = () => {
    const initialProducts = [
      { id: 0, name: "shipcy", price: 100, items: 1 },
      { id: 1, name: "pepsi", price: 200, items: 1 },
      { id: 2, name: "molto", price: 300, items: 1 },
      { id: 3, name: "kranshy", price: 400, items: 1 },
      { id: 4, name: "cigaretes", price: 500, items: 1 },
    ];
    setProducts(initialProducts);
  };

  const delCart = () => {
    setProducts([]);
  };

  const addBack = (id) => {
    setProducts((prevProducts) =>
      prevProducts.find((product) => product.id === id)
        ? prevProducts.map((product) =>
            product.id === id
              ? { ...product, items: product.items + 1 }
              : product
          )
        : [
            ...prevProducts,
            { ...addedProducts.find((product) => product.id === id) },
          ]
    );
  };

  return (
    <div className=" text-center">
      <Header addBack={addBack} products={products} />
      <Items
        products={products}
        add={add}
        remove={remove}
        del={del}
        reset={reset}
        delCart={delCart}
      />
    </div>
  );
};

export default App;
