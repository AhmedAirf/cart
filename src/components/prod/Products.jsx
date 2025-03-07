/* eslint-disable react/prop-types */
const Products = ({
  product: { name, price, items, id },
  add,
  remove,
  del,
}) => {
  return (
    <div className="flex flex-col i md:flex-row items-center justify-between p-6 my-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 w-full md:w-auto">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600">${price} per item</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-700">
            <span className="font-semibold">Items:</span> {items}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Total:</span> ${price * items}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row gap-2 mt-4 md:mt-0">
        <button
          className="btn btn-accent rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => add(id)}
        >
          Add
        </button>
        <button
          className="btn btn-neutral rounded-lg hover:bg-gray-600 transition-colors"
          onClick={() => remove(id)}
        >
          Remove
        </button>
        <button
          className="btn btn-error rounded-lg hover:bg-red-600 transition-colors"
          onClick={() => del(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Products;
