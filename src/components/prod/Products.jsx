/* eslint-disable react/prop-types */

const Products = ({
  product: { name, price, items, id },
  add,
  remove,
  del,
}) => {
  return (
    <div className=" flex   justify-evenly gap-6 my-[2em] p-4  rounded-3xl bg-blue-950 text-white">
      <h1>Name: {name} </h1>
      <h1>Price: {price} </h1>
      <h1>items: {items} </h1>
      <h1>Total: {price * items} </h1>
      <button className="btn btn-accent  rounded-2xl " onClick={() => add(id)}>
        Add
      </button>
      <button
        className="btn btn-neutral rounded-2xl "
        onClick={() => remove(id)}
      >
        Remove
      </button>
      <button className="btn btn-error rounded-2xl " onClick={() => del(id)}>
        Del
      </button>
    </div>
  );
};

export default Products;
