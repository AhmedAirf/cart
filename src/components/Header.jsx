/* eslint-disable react/prop-types */
const Header = ({ addBack, products }) => {
  return (
    <div>
      <div className="navbar bg-gray-700 shadow-sm px-4 flex flex-col md:flex-row justify-between">
        <div className="flex justify-center md:justify-start">
          <a className="btn btn-ghost text-3xl font-bold text-white">MyCart</a>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 md:pr-[4em]">
          <button
            className="btn btn-primary rounded-2xl w-[5em]"
            onClick={() => addBack(0)}
          >
            shipsy
          </button>
          <button
            className="btn btn-primary rounded-2xl w-[5em]"
            onClick={() => addBack(1)}
          >
            pepsi
          </button>
          <button
            className="btn btn-primary rounded-2xl w-[5em]"
            onClick={() => addBack(2)}
          >
            molto
          </button>
          <button
            className="btn btn-primary rounded-2xl w-[5em]"
            onClick={() => addBack(3)}
          >
            kranchy
          </button>
          <button
            className="btn btn-primary rounded-2xl w-[5em]"
            onClick={() => addBack(4)}
          >
            cigaretes
          </button>
        </div>
        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">
                  {products.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
