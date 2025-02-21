/* eslint-disable react/prop-types */
const Products = ({
  product: { name, price, items, id },
  add,
  remove,
  del,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:justify-evenly gap-4 p-4 my-[2em] rounded-3xl bg-blue-950 text-white">
      <div className="flex flex-col md:flex-row md:gap-6 gap-4 text-center md:text-left">
        <h1 className="min-w-[120px]">Name: {name}</h1>
        <h1 className="min-w-[100px]">Price: ${price}</h1>
        <h1 className="min-w-[80px]">Items: {items}</h1>
        <h1 className="min-w-[120px]">Total: ${price * items}</h1>
      </div>
      <div className="flex flex-row gap-2 md:gap-4 justify-center flex-wrap">
        <button
          className="btn btn-accent rounded-2xl text-sm md:text-base"
          onClick={() => add(id)}
        >
          Add
        </button>
        <button
          className="btn btn-neutral rounded-2xl text-sm md:text-base"
          onClick={() => remove(id)}
        >
          Remove
        </button>
        <button
          className="btn btn-error rounded-2xl text-sm md:text-base"
          onClick={() => del(id)}
        >
          Del
        </button>
      </div>
    </div>
  );
};

export default Products;
